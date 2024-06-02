const mongoose=require("mongoose")
//const user=require("./User")
const Song=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    track:{
        type:String,
        required:true,
    },
    artist:{
        type:mongoose.Types.ObjectId,
        //required:true,
        ref:"User",
        //default:"",
    }
})
const SongModel=mongoose.model("Song",Song)
module.exports=SongModel