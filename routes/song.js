const express=require("express")
const router=express.Router()
//const jwt=require("jsonwebtoken")
const passport=require("passport")
const Song=require("../models/Song")
const User=require("../models/User")
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { name, thumbnail, track } = req.body;

        if (!name || !thumbnail || !track) {
            return res.status(301).json({ err: 'Insufficient details to create song' });
        }

        const artist = req.user._id;
        const songDetails = { name, thumbnail, track, artist };

        // Create the song
        const createdSong = await Song.create(songDetails);

        // Populate the 'artist' field in the response
        //const populatedSong = await Song.findById(createdSong._id).populate('artist', 'username email'); // Add the fields you want to populate

        return res.status(200).json(createdSong);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Internal server error' });
    }
});


router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser=req.user
    const songs=await Song.find({artist:req.user._id}).populate("artist")
    return res.status(200).json({data:songs})
})
router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const {artistId}=req.params
    const artist=await User.find({_id:artistId})
    if(!artist)
    {
        return status(301).json({err:"artist does not exist"})}
    const songs=await Song.find({artist:artistId})
    return res.status(200).json({data:songs})
})
router.get("/get/songname/:songName",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const {songName}=req.params

    const songs=await Song.find({name:songName}).populate("artist")
    return res.status(200).json({data:songs})
})
module.exports=router