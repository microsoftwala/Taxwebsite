const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose  = require("mongoose")
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:4000', 
    credentials:true,           
    optionSuccessStatus:200
}
const app = express()


app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))
app.use(express.json())

mongoose.connect("mongodb+srv://prakhardeoria2004:8s1Ccfx0XWM13MJf@cluster1.jefbksp.mongodb.net/wikiDB").then(() => {
    console.log(`CONNECTED TO MONGO!`);
})
.catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
})



const loginSchema = {
    email:'String',
    password:'String'
}


const userSignupschema = {
    username:'String',
    email:'String',
    password:'String',
    cpassword:'String'
}
const Login = mongoose.model('Login',loginSchema)
const User = mongoose.model('User',userSignupschema)


let emails =''

app.get("/login",function(req,res){
    User.findOne({'email':emails}).then((data)=>{
        if(data){
            res.send(data)
        }else{
            res.send("Error Occur")
        }
    })
})



app.get("/signups",function(req,res){
    User.find().then((data)=>{
        if(data){
            res.send(data)
        }else{
            res.send("Error Occur")
        }
    })
})



app.post("/signup",function(req,res){
    
    console.log(req.body)
    const User1 = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword
    })
       
    User.findOne({'email':req.body.email}).
    then((data)=>{
        if(data)
            {
                context = "You are already register"
                res.send(context)
            }
            else
            {
                if(req.body.password === req.body.cpassword){
                    User1.save().then((data,err)=>{
                        if(!err)
                        res.send("Succesfully Register")
                        else
                        console.log(err)
                    })}
                    else{
                        context = "Password did not matched"
                        res.send(context)
                    }
             }
        })
})



app.post("/login",function(req,res){
    let email = req.body.email
    emails = req.body.email
    let password = req.body.password
    console.log(req.body)
    const Login1 = new Login({
        email:email,
        password:password
    })
   User.findOne({'email':email,'password':password}).then((data,err)=>{
        if(data){

        console.log("Successfully Find in db");
        context = "SuccesFully Login"
        Login1.save()
        res.send(context)
        }
        else{
            context="Your password or email is wrong"
            res.send(context)
    }
    })
})



// app.post("/article/:titleId/:contents",function(req,res){
//     let title = req.params.titleId
//     let content = req.params.contents
//     const Article1 = new Article({
//         title:title,
//         content:content
//     })
//     Article1.save().then((data,err)=>{
//         if(!err)
//         console.log("Successfully added in Db")
//         else
//         console.log(err)
//     })
// })



// app.post("/article/:titleId",function(req,res){
//     Article.deleteMany({'title':req.params.titleId}).then((data,err)=>{
//         if(!err){
//             console.log("Successfully Deleted")
//         }else{
//             console.log(err)
//             console.log("Error happened")
//         }
//     })
// })



// app.get("/login/:titleId",function(req,res){
//     Article.findOne({'title':req.params.titleId}).then((data)=>{
//         if(data){
//             res.send(data.content)
//         }else{
//             res.send("Error Occur")
//         }
//     })
// })

app.listen(4000,function(){
    console.log("Server running")
})