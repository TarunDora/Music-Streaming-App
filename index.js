const express =require("express")
const mongoose=require("mongoose")
const app=express()
require("dotenv").config()
const cors=require("cors")
const port=8080
app.use(cors())
app.use(express.json())
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport")
const User=require("./models/User")
const authRoutes=require("./routes/auth")
const songRoutes=require("./routes/song")
const playlistRoutes=require("./routes/playlist")
console.log(process.env)
mongoose.connect("mongodb+srv://tarun:"+process.env.MONGO_PASSWORD+"@cluster0.vqpd1lj.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then((x)=>{
    console.log("conected to mongo")
})
.catch((err)=>{
    console.log("error while connecting to mongo")
})

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thiskeyissupposedtobesecret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use("/auth",authRoutes)
app.use("/song",songRoutes)
app.use("/playlist",playlistRoutes)
app.listen(port,()=>{
    console.log("app is running on port "+port)
})