import express from "express";
import nodemailer from "nodemailer"
import session from "express-session"
import cookieParser from "cookie-parser"
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
import cors from "cors"
import bcrypt from "bcrypt"
import multer from "multer"
import { fileURLToPath } from "url";
import { Session } from "inspector";

declare module 'express-session' {
    interface SessionData {
        userid: any;
    }
}

const prisma = new PrismaClient()

const app = express();

//session middleware
app.use(session({
    secret: "asdfkhjf324kner9p8u423p93hf9e830rt8uerfh",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60, secure: false },
    resave: true,
}));

//parsing incoming data and parsing cookies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))


//////////////////////middleware-section//////////////////////

//sign in OR log in

//check if user is logged in or not
app.get('/', (req, res) => {

    if (req.session.userid) {
        res.json("Logged in!")
    } else {
        res.json("log in");
    }
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
        const ValidPassword = bcrypt.compare(password, JSON.stringify(userPassword))

        if (ValidPassword) {
            res.json("welcome")
            req.session.userid = email
            console.log(req.session)
            req.session.save()
        } else {
            res.status(404).json("invalid password")
        }
    } else {
        res.status(404).json("user doesnt exist")
    }
})

let RandomNumber: Number;

function RandomNumberGenerator() {
    RandomNumber = Math.floor(100000 + Math.random() * 900000)
}

setInterval(RandomNumberGenerator, 10 * 1000);

app.post('/randomno', (req, res) => {

    res.json(RandomNumber)

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     port: 587,
    //     secure: false,
    //     requireTLS: true,
    //     auth: {
    //         user: process.env.EMAIL,
    //         pass: process.env.PASSWD,
    //     }
    // })

    // let mailOptions = {
    //     to: req.body.email,
    //     subject: 'HINDAVI GRAPHICS STUDIOS',
    //     text: `In order to register and get yourself verified please refer to the number given below
    //     Your OTT number is ${RandomNumber}`
    // }

    // transporter.sendMail(mailOptions, (err, info) => {
    //     if (err) console.log(err)
    //     else {
    //         console.log('email sent' + info.response)
    //     }
    // })

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
                    role: "base",
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
                    role: "base",
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
app.post('/switch/political', async (req, res) => {

    const { email, partylogo, facebook, instagram, designation1, designation2, twitter } = req.body

    const updateUser = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            role: "Politicaluser",
            businessname: null,
            tagline: null,
            whatsappno: null,
            address: null,
            websiteurl: null,
            partylogo: partylogo,
            designation1: designation1,
            designation2: designation2,
            facebook: facebook,
            twitter: instagram,
            instagram: twitter
        }
    })

    console.log(updateUser)
    res.json(updateUser)
})

//switch base user to political  user
app.post('/switch/business', async (req, res) => {

    const { email, businessname, tagline, whatsappno, address, websiteurl } = req.body

    const updateUser = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            role: "Businessuser",
            businessname: businessname,
            tagline: tagline,
            whatsappno: whatsappno,
            address: address,
            websiteurl: websiteurl,
            partylogo: null,
            facebook: null,
            twitter: null,
            instagram: null
        }
    })

    console.log(updateUser)
    res.json(updateUser)
})



////////////////port initialization///////////////////////

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));

