import express, { NextFunction } from "express";
import S3 from "aws-sdk/clients/s3"
import fs from "fs";
import Razorpay from "razorpay"
require('dotenv').config()
import bodyParser from "body-parser";
import crypto from "crypto"
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

const s3 = new S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: "ap-south-1"
})

///awsconfig////////////////

// app.use(session({
//     secret: "asdfkhjf324kner9p8u423p93hf9e830rt8uerfh",
//     saveUninitialized: true,
//     cookie: { maxAge: 1000 * 60, secure: false },
//     resave: true,
// }));

//parsing incoming data and parsing cookies
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

////cors options//////

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
});

////cors options//////

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

app.post('/upload-profile', async (req, res) => {

    const { email, profilephoto } = req.body;

    const updateprofile = await prisma.user.update({

        where: {
            email: JSON.parse(email)
        },
        data: {
            profilephoto: JSON.parse(profilephoto)
        }

    })

    res.json("updated successfully");

})

app.post('/upload-image', async(req, res) => {
    const {email, image, title, designation} = req.body;

    await prisma.photos.create({
        data: {
            userId: email,
            title: title,
            designation: designation,
            image: image
        }
    }).then(() => {
        console.log("successfully uploaded the image");
    }).catch(err => console.log(err));
})

app.get("/image", (req, res) => {
    const deleteParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'next-s3-uploads/186d7ded-e3cf-41c2-853a-bb9047c863b2/wall.png'
    }

    s3.getObject(deleteParams, (err, data) => {
        if (err) return console.log(err, err.stack);
        console.log(data);
    })
})

app.get('/delete', (req, res) => {
    const imageurl = "sdf";

    const deleteParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'next-s3-uploads/0b4cf6b1-2aa1-4a89-bf83-7b298fd011e7/first%20ace.png'
    }

    s3.deleteObject(deleteParams, (err, data) => {
        if (err) return console.log(err, err.stack);
        console.log(data);
    })


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
                            image: "None",
                            designation: "none",
                            title: "none"
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
                            image: "None",
                            designation: "none",
                            title: "none"
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


/////////////razorpay integration and intialization///////////////////////*  */

app.post('/orders', async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "key_id",
            key_secret: "key_secret"
        })

        const options = {
            amount: 5000,
            currency: "INR",
            receipt: "receipt_order 1232",
        }

        const order = await instance.orders.create(options);

        if(!order) return res.status(500).send("some error has ocurred");

        res.json(order);

    } catch(err) {
        console.log(err);
    }
})

//verify payment to confirm signature
app.post('/verify-success', async (req, res) => {

    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        const shasum = crypto.createHmac("sha256", "key_secret");

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        if (digest !== razorpaySignature) {
            return res.status(400).json({msg: "Transaction is illicit!"});
        }

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });

    } catch(err) {
        console.log(err)
    }

})

/////////////razorpay integration and intialization//////////////////////


////////////////port initialization///////////////////////

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));

