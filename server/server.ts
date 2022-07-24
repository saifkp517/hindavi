import express from "express";
import session from "express-session"
import cookieParser from "cookie-parser"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

//session middleware
app.use(session({
    secret: "asdfkhjf324kner9p8u423p93hf9e830rt8uerfh",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

//parsing incoming data and parsing cookies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

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

//sign up for political and business users
app.post('/signup/political', async (req, res) => {
    const { profilephoto, partylogo, username, email, phoneno, designation1, designation2, facebook, instagram, twitter } = req.body;

    try {

        const username = req.body.username;
        const email = req.body.email
        const profileStatus = "Political"

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(user) return res.json("User exists");

        await prisma.user.create({
            data: {
                profilephoto: profilephoto
            }
        })
        res.json(user)
        console.log(user)
    } catch (err) {
        console.log(err)
        res.send(500).json(err)
    }


    

})

app.post('/signup/business', (req, res) => {
    const { profilephoto, businessname, tagline, emailid, phoneno, whatsappno, address, websiteurl } = req.body
    const profileStatus = "Business"
})




////////////////port initialization///////////////////////

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));
