// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())



// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(2000,()=>{
//     console.log("port connected");
// })



const cors = require('cors');
var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose =	require("passport-local-mongoose")
const User = require("./model/User");
var app = express();
app.use(express.json())
app.use(cors());
mongoose.connect("mongodb://0.0.0.0:27017/qw").then(() => {
  console.log("connected!");
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Handling user signup
app.post('/auth', async(req, res) => {
  console.log("Hello we are here");
  let userExists = false;
  console.log("finding : " + req.body.username + " with password : " +req.body.password);

  User.findOne({username : req.body.username})
              .then((userNameExist) => {
                  console.log(userNameExist);
                  if(userNameExist){
                      console.log("username exists");
                      console.log(userNameExist.password);
                      if(userNameExist.password === req.body.password){
                          console.log("password matches ");
                          return res.status(200).json({code : 1});
                          
                      }else 
                      {
                        console.log("Password not mateches");
                        return res.status(401).json({code : 0});
                      }
                  }
                  else{
                    console.log("user not exists");
                    return res.status(401).json({code: 4}); 
                  } 

              }).catch(err => {console.log(err);});

});

app.post("/register", async (req, res) => {
  console.log(req.body);
	const user = await User.create({
	password: req.body.passwords,
  username: req.body.username
	});
	user.save()
	return res.status(200).json(user);
});

var port = process.env.PORT ||5000;
app.listen(port, function () {
	console.log("Server Has Started on 5000!");
});
