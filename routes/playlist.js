const express=require("express")
const passport=require("passport")
const Playlist=require("../models/Playlist")
const User=require("../models/User")
const Song = require("../models/Song")
const router=express.Router()
router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser=req.user
    const {name,thumbnail,songs}=req.body
    if(!name||!thumbnail||!songs)
    {
        return res.status(301).json({err:"insufficient data"})
    }
    const playlistData={
        name,
        thumbnail,
        songs,
        owner:currentUser._id,
        collaborators:[],
    }
    const playlist=await Playlist.create(playlistData)
    return res.status(200).json(playlist)
})
router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const playlistId=req.params.playlistId
    const playlist=await Playlist.findOne({_id:playlistId})
    if(!playlist){
        return res.status(301).json({err:"invalid id"})
    }
    return res.status(200).json(playlist)
})
router.get("/get/me",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistId=req.user._id
    
    //console.log(artist)
    
    const playlists=await Playlist.find({owner:artistId}).populate("owner")

    return res.status(200).json({data:playlists})
})
router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistId=req.params.artistId
    const artist=await User.findOne({_id:artistId})
    //console.log(artist)
    if(!artist )
    {
        return res.status(304).json({err:"invalid artist id"})
    }
    const playlists=await Playlist.find({owner:artistId})

    return res.status(200).json({data:playlists})
})
router.post("/add/song",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser=req.user
    const {playlistId,songId}=req.body
    const playlist=await Playlist.findOne({_id:playlistId})
    if(!playlist)
    {
        return res.status(304).json({err:"playlist does not exist"})
    }
    if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({err:"not allowed"})
    }
    const song=await Song.findOne({_id:songId})
    if(!song){
        return res.status(304).json({err:"song does not exist"})
    }
    playlist.songs.push(songId)
    await playlist.save()
    return res.status(200).json(playlist)
})
module.exports=router