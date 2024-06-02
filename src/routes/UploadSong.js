import {useState} from "react"
import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import CloudinaryUpload from '../components/shared/CloudinaryUpload'
import TextwithHover from "../components/shared/Textwithhover"
import TextInput from "../components/shared/Textinput"
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import {useNavigate} from "react-router-dom"

const UploadSong=()=>{
    const [name,setName]=useState("")
    const [thumbnail,setThumbnail]=useState("")
    const [playlistUrl,setPlaylistUrl]=useState("")
    const [uploadedSongFileName,setUploadedSongFileName]=useState("")
    const navigate=useNavigate()
    const submitSong=async()=>{
        console.log(name)
        console.log(thumbnail)
        console.log(playlistUrl)
        const data={name,thumbnail,track:playlistUrl}
        const response=await makeAuthenticatedPOSTRequest("/song/create",data)
        if(response.err){
            alert("could not create song")
            return
        }
        alert("success")
        navigate("/home")
        console.log(response)
    }
    
    console.log(window)
    console.log(window.cloudinary)
    return(
        <div className="h-full w-full flex">
                <div className="logoDiv" p-6 >
                <Icon icon="arcticons:wynk-music" width="100"/>
                <IconText iconName={"ic:sharp-home"} displayText={"Home"} active/>
                <IconText iconName={"ic:outline-search"} displayText={"Search"} />
                <IconText iconName={"fluent:library-20-regular"} displayText={"Library"}/>
                <IconText iconName={"ri:music-fill"} displayText={"My Music"}/>
            <br/>
            <IconText iconName={"basil:add-solid"} displayText={"Create Playlist"}/>
            <IconText iconName={"ph:heart-fill"} displayText={"Liked Songs"}/>
            <br/>
            <p className="border border-gray-200 px-5 text-color-black  flex py-2 rounded-full justify-start hover"><Icon icon="mingcute:earth-line"/>  English</p>
            </div>
            <div clasName=" w-4/5 bg-app-black flex items-center justify-end">
            <div className="navbar  w-full flex hover:text-red items-center justify-around"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><TextwithHover displayText={"Premium"}/>&nbsp;&nbsp;<TextwithHover displayText={"Support"}/>
            &nbsp;&nbsp;<TextwithHover displayText={"Download"}/>
            &nbsp;&nbsp;<TextwithHover displayText={"Upload Song"}/><div className="px-3 py-2 flex items-center justify-center h-2/3 rounded-full cursor-pointer">|    AC</div>
            </div>
            <div className="content p-8 pt-0 overflow-auto">
                <div className="text-2xt font-semibold mb-5 text-black">Upload Your Music</div>
                <div className="w-2/3 flex  space-x-3"><div className="w-1/2"><TextInput label="Name" placeholder="name" value={name} setValue={setName}/></div>
                <div className="w-1/2">
                <TextInput label="Thumbnail" placeholder="thumbnail" value={thumbnail} setValue={setThumbnail}/></div></div>
                 </div>
                 <div  className='py-5'>
                    uploadedSongfileName?<div className="bg-black text-white rounded-full p-3 w-1/3">{uploadedSongFileName.substring(0,20)}...</div>:
                    <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/></div>
                    <div className="bg-black text-white rounded-full p-3 w-1/4 flex justify-center item-center cursor-pointer font-semibold" onClick={submitSong}>
                        Submit Song
                    </div>
            </div>
        </div>
    )
}

export default UploadSong