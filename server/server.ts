import express from "express";
import session from "express-session"
import cookieParser from "cookie-parser"
import { PrismaClient } from '@prisma/client'
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
    cookie: { maxAge: 1000 * 60, secure: false},
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


////////////////test////////////////////
// const myusername = 'user1'
// const mypassword = 'mypassword'

// // a variable to save a session
// let Usersessions: any;

// app.post('/user',(req,res) => {
//     if(req.body.username == myusername && req.body.password == mypassword){
//         Usersessions=req.session;
//         Usersessions.userid=req.body.username;
//         console.log(req.session)
//         res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
//     }
//     else{
//         res.send('Invalid username or password');
//     }
// })
// app.get('/',(req,res) => {
//     Usersessions=req.session;
//     if(Usersessions.userid){
//         res.send("Welcome User <a href=\'/logout'>click to logout</a>");
//     }else
//     res.sendFile('./index.html',{root:__dirname})
// });

////////////////test////////////////////


//////////////////////middleware-section//////////////////////

//sign in OR log in

//check if user is logged in or not
app.get('/', (req, res) => {

    if (  req.session.userid  ) {
        res.json("Logged in!")
    } else {
        res.json("log in")
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
        const ValidPassword =bcrypt.compare(password, JSON.stringify(userPassword))

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
app.post('/signup', async (req, res) => {
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
        await prisma.user.create({
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
                }
            }
        })
        res.json(user)
        console.log(user)
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
            businessname: "",
            tagline: "",
            whatsappno: "",
            address: "",
            websiteurl: "",
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
            partylogo: "",
            facebook: "",
            twitter: "",
            instagram: ""
        }
    })

    console.log(updateUser)
    res.json(updateUser)
})



////////////////port initialization///////////////////////

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));

