import express, { NextFunction } from "express";
import S3 from "aws-sdk/clients/s3"
import https from "https"
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
    userid: string | JwtPayload
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
                req.userid = decoded.userid;
                next();
            }
        });
    }
}

app.post('/protected', verifyToken, (req: UserAuth, res) => {
    res.send(req.userid)
})

app.post('/userinfo', async (req, res) => {

    const { id } = req.body;

    const userinfo = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            username: true,
            email: true,
            coins: true,
            profilephoto: true,

        }
    }).then(data => {
        res.json(data)
    })
})

// app.post('/emailverify', async (req, res) => {
//     const { email } = req.body;

//     const verified = await prisma.user.update({
//         where: {
//             email: email
//         },
//         data: {
//             verified: true
//         }
//     })

//     if (verified) res.json("Email has been verified!")
// })


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

    const userId = await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true
        }
    })

    let userid;

    if(userId) {
        userid = userId.id
    }
    else {
        return res.status(404).json("User Not found")
    }


    if (userPassword) {

        const ValidPassword = await bcrypt.compare(password, userPassword.password)

        if (ValidPassword) {

            const token = jwt.sign({ userid }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5hr' });

            res.json({ token: token });

        } else {

            res.status(404).json("Invalid Password")

        }

    } else {
        return res.status(404).json("Email not Found")
    }
})

app.post('/upload-profile', async (req, res) => {

    const { email, profilephoto } = req.body;


    const target = profilephoto.replace("https://hindavidatabucket.s3.ap-south-1.amazonaws.com/", "")

    const deleteParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: target
    }

    s3.deleteObject(deleteParams, (err, data) => {
        if (err) return console.log(err, err.stack);
        console.log(data);
    })

    await prisma.user.update({

        where: {
            email: email
        },
        data: {
            profilephoto: profilephoto
        }

    }).then(data => {
        res.json("updated successfully");
    })

})

app.post('/upload-image', async (req, res) => {
    const { image, title, designation } = req.body;

    await prisma.photos.create({
        data: {
            title: title,
            designation: designation,
            image: image
        }
    }).then(() => {
        console.log("successfully uploaded the image");
    }).catch(err => console.log(err));
})


app.get('/images', async (req, res) => {

    await prisma.photos.findMany()
        .then(data => {
            res.json(data)
            console.log(data)
        })

})


app.post('/forgotpassword', async (req, res) => {
    const { email } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.email,
            pass: process.env.passwd,
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


app.post('/email', (req, res) => {

    const { email, otp } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.email,
            pass: process.env.passwd,
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

    const { email, profilelogo, partylogo, facebook, instagram, designation1, designation2, twitter } = req.body

    const addPolitical = await prisma.politicalProfile.create({
        data: {
            email: email,
            profilelogo: profilelogo,
            partylogo: partylogo,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            designation1: designation1,
            deisgnation2: designation2
        }
    })

    console.log(addPolitical)
    res.json(addPolitical)
})

//switch base user to political  user
app.post('/add/business', async (req, res) => {

    const { email, businessname, tagline, whatsappno, address, websiteurl } = req.body

    const addBusiness = await prisma.businessProfile.create({
        data: {
            email: email,
            businessname: businessname,
            tagline: tagline,
            whatsappno: whatsappno,
            address: address,
            websiteurl: websiteurl
        }

    })

    console.log(addBusiness)
    res.json(addBusiness)
})


/////////////razorpay integration and intialization///////////////////////*  */

app.post('/orders/:value', async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.key_id,
            key_secret: process.env.key_secret
        })

        const amount = parseInt(req.params.value)


        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: "receipt_order 1232",
        }

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("some error has ocurred");

        res.json(order);

    } catch (err) {
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

        const shasum = crypto.createHmac("sha256", process.env.key_secret);

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        if (digest !== razorpaySignature) {
            return res.status(400).json({ msg: "Transaction is illicit my dude!" });
        }

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });

    } catch (err) {
        console.log(err)
    }

})

app.post("/update-coins", async (req, res) => {
    const { id, coins } = req.body;

    const userinfo = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            coins: true
        }
    })

    const currentValue = userinfo.coins;

    await prisma.user.update({
        where: {
            id: id
        },
        data: {
            coins: currentValue + parseInt(coins)
        }
    })

    res.status(200).json({ message: "added coins to wallet" })
})

app.post('/payment-history', async (req, res) => {
    const {buyer, paymentamount, coinspurchased} = req.body;

    await prisma.paymenthistory.create({
        data: {
            buyer: buyer,
            paymentamount: parseInt(paymentamount),
            coinspurchased: coinspurchased
        }
    })

    res.status(200).json({ message: "updated payment" })
})

app.get('/payment-history/:id', async (req, res) => {

    const payments = await prisma.paymenthistory.findMany({
        where: {
            buyer: req.params.id
        }
    })
    res.status(200).json(payments)

})

/////////////razorpay integration and intialization//////////////////////


////////////////port initialization///////////////////////

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('App listening on port ' + port));

