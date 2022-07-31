import express, { NextFunction } from "express";
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
import { fileURLToPath } from "url";
import { Session } from "inspector";
import jwt, { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient()

const app = express();

export interface UserAuth extends express.Request {
    user: string | JwtPayload
}

//parsing incoming data and parsing cookies
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
    secret: "asdfkhjf324kner9p8u423p93hf9e830rt8uerfh",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60, secure: false },
    resave: true,
}));


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))


//////////////////////middleware-section//////////////////////

//sign in OR log in

//check if user is logged in or not

function parseCookies (request: UserAuth) {
    const list: any = {};
    const cookieHeader = request.headers?.cookie;
    if (!cookieHeader) return list;

    cookieHeader.split(`;`).forEach(function(cookie) {
        let [ name, ...rest] = cookie.split(`=`);
        name = name?.trim();
        if (!name) return;
        const value = rest.join(`=`).trim();
        if (!value) return;
        list[name] = decodeURIComponent(value);
    });

    return list;
}


function authenticateToken(req: UserAuth, res: express.Response, next: NextFunction) {

    // if (token == null) return res.sendStatus(401)

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: Error, user: any) => {
    //     console.log(err)
    //     if (err) return res.sendStatus(403)
    //     req.user = user
    //     next()
    // })
}
app.get('/', (req: UserAuth, res) => {

    const cookies = parseCookies(req)
    console.log(cookies)

    res.writeHead(200, {
        "Set-Cookie": `mycookie=test`,
        "Content-Type": `text/plain`
    });

    res.end(req.user + "adas")
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
        bcrypt.compare(password, userPassword.password).then(result => {

            if (result) {

                const accessToken = generateAccessToken(email)
                const refreshToken = jwt.sign(email.toString(), process.env.ACCESS_TOKEN_SECRET)

                res.cookie("token", accessToken, { httpOnly: true })

                res.json({ accessToken: accessToken, refreshToken: refreshToken })

            } else {

                console.log(typeof password)
                console.log(typeof userPassword.password)
                console.log(password)
                console.log(JSON.stringify(userPassword.password))

                res.json({ message: "Invalid Password" })
            }

        })
        .catch(err => console.log(err))
        
    } else {
        res.json({ message: "User does not exist" })
    }
})

function generateAccessToken(user: any) {
    return jwt.sign({ user: user.toString() }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}


let RandomNumber: Number;

function RandomNumberGenerator() {
    RandomNumber = Math.floor(100000 + Math.random() * 900000)
}

setInterval(RandomNumberGenerator, 60 * 1000);

app.post('/randomno', (req, res) => {

    res.json(RandomNumber)

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
        to: req.body.email,
        subject: 'HINDAVI GRAPHICS STUDIOS',
        text: `In order to register and get yourself verified please refer to the number given below
        Your OTT number is ${RandomNumber}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err)
        else {
            console.log('email sent' + info.response)
        }
    })

})

app.post('/verifyemail', async (req, res) => {
    const { email, randomno } = req.body;

    if (randomno === RandomNumber) {

        const verifyUser = await prisma.user.update({

            where: {
                email: email
            },
            data: {
                verified: true
            }

        })

        res.json(verifyUser)

    } else {
        res.status(404).json("Incorrect code number")
    }
})

//multer initialization
const imageStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage: imageStorage }).single('file');

//upload profile picture
app.post('/profile-upload', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return console.log("Error:- " + err)
        } else if (err) {
            return console.log(err)
        }
        console.log("alright!")
        let filePath = req.file.path

        let email = "asd@gmail.com"

        const updateUser = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                profilephoto: filePath
            }
        })
    })
})


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

        if (user) return res.status(401).json("User exists");

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
            res.json(createUser)
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

