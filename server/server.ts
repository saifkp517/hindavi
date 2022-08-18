import express, { NextFunction } from "express";
import S3 from "aws-sdk/clients/s3"
import fs from "fs";
require('dotenv').config()
import session from "express-session"
import bodyParser from "body-parser";
import nodemailer from "nodemailer"
import cookieParser from "cookie-parser"
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
import cors from "cors"
import bcrypt from "bcrypt"
import multer from "multer"
import jwt, { JwtPayload } from "jsonwebtoken";
import multerS3 from "multer-s3"
import { Stream } from "stream";

const prisma = new PrismaClient()

const app = express();

export interface UserAuth extends express.Request {
    email: string | JwtPayload
}

///awsconfig////////////////

const BUCKET_NAME = 'hindavidatabucket'; 

 const s3 = new S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: "ap-south-1"
})

///awsconfig////////////////

app.use(session({
    secret: "asdfkhjf324kner9p8u423p93hf9e830rt8uerfh",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60, secure: false },
    resave: true,
}));

//parsing incoming data and parsing cookies
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

//////////////////////middleware-section//////////////////////

//sign in OR log in

//check if user is logged in or not

app.post('/test', (req, res) => {
    res.json(req.body.email);
    res.cookie('cookies', 'data', { httpOnly: true })
})


////authentications endpoints///////////////////////////////////

function verifyToken(req: UserAuth, res: express.Response, next: NextFunction) {
    const token = req.body.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err: Error, decoded: UserAuth) {
            if (err) {
                res.status(401).json({ message: 'Unauthorized: Invalid token' });
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
}

app.post('/protected', verifyToken, (req: UserAuth, res) => {
    res.send(req.email);
})

app.post('/emailverify', async (req, res) => {
    const { email } = req.body;

    const verified = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            verified: true
        }
    })

    if (verified) res.json("Email has been verified!")
})


app.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    const userPassword = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            password: true
        }
    })

    if (userPassword) {
        const ValidPassword = await bcrypt.compare(password, userPassword.password)

        if (ValidPassword) {

            const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5hr' });

            res.json({ token: token });

        } else {

            res.status(404).json("Invalid Password")

        }

    } else {
        res.status(404).json("Email not Found")
    }
})

app.post('/forgotpassword', async (req, res) => {
    const { email, newpassword } = req.body;

    await prisma.user.update({
        where: {
            email: email
        },
        data: {
            password: newpassword
        }

    })

    res.status(200).json({ message: "updates email" })
})


app.post('/email', (req, res) => {

    const { email, otp } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWD,
        }
    })

    let mailOptions = {
        to: email,
        subject: 'HINDAVI GRAPHICS STUDIOS',
        text: `In order to register and get yourself verified please refer to the number given below
        Your OTT number is ${otp}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err)
        else {
            console.log('email sent' + info.response)
            res.json("Email has been sent Successfully!")
        }
    })

})

////authentications endpoints///////////////////////////////////

/////////////////////////upload image-sections

app.get('/images', (req, res, next) => {

    const displayParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: process.env.AWSAccessKeyId
    }
    
    s3.getObject(displayParams, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log(data)
    })
})

/////////////////////////upload image-sections

//sign up as base user
app.post('/signup/:id', async (req, res) => {
    const { username, email, password, phoneno } = req.body

    try {
        //check if user exists
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (user) return res.status(409).json("User exists");

        const EncryptedPassword = await bcrypt.hash(password, 10)

        //add user

        if (req.params.id === "null") {

            const createUser = await prisma.user.create({
                data: {
                    profilephoto: "none",
                    username: username,
                    email: email,

                    password: EncryptedPassword,
                    phoneno: phoneno,
                    photos: {
                        create: {
                            image: "None"
                        }
                    },
                    coins: 0,
                    verified: false,
                    refcode: uuidv4()
                }
            })

            res.json({ message: "User Signed Up!" })
            console.log(createUser)

        } else {

            const createUser = await prisma.user.create({
                data: {
                    profilephoto: "none",
                    username: username,
                    email: email,
                    password: EncryptedPassword,
                    phoneno: phoneno,
                    photos: {
                        create: {
                            image: "None"
                        }
                    },
                    coins: 0,
                    verified: false,
                    refcode: uuidv4()
                }
            })
            res.json(createUser)
            console.log(createUser)

            const referral = await prisma.user.updateMany({
                where: {
                    refcode: req.params.id
                },
                data: {
                    coins: {
                        increment: 20
                    }
                }
            })

        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err + "this is a error bro!")
    }
})

//switch user to political  user
app.post('/add/political', async (req, res) => {

    const { email, partylogo, facebook, instagram, designation1, designation2, twitter } = req.body

    const addPolitical = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            politicalprofiles: {
                create: {
                    partylogo: partylogo,
                    facebook: facebook,
                    instagram: instagram,
                    twitter: twitter,
                    designation1: designation1,
                    deisgnation2: designation2
                }
            }
        }
    })

    console.log(addPolitical)
    res.json(addPolitical)
})

//switch base user to political  user
app.post('/add/business', async (req, res) => {

    const { email, businessname, tagline, whatsappno, address, websiteurl } = req.body

    const addBusiness = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            businessprofiles: {
                create: {
                    businessname: businessname,
                    tagline: tagline,
                    whatsappno: whatsappno,
                    address: address,
                    websiteurl: websiteurl
                }
            }
        }
    })

    console.log(addBusiness)
    res.json(addBusiness)
})



////////////////port initialization///////////////////////

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));

