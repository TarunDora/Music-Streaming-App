import LoggedInContainer from "../containers/LoggedinContainer"
import TextInput from "../components/shared/Textinput"
import { useState } from "react"
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers"

const Playlist=()=>{
    const [playlistName,setplaylistName]=useState("")
        const [playlistThumbnail,setplaylistThumbnail]=useState("")
        //console.log(playlistName)
        //console.log(playlistThumbnail)
        const createPlaylist=async()=>{
            const response=await makeAuthenticatedPOSTRequest("/playlist/create",{name:playlistName,thumbnail:playlistThumbnail,songs:[]})
            console.log(response)
            if(response._id){
                //closeModal()
            }
        }
    return(
        
        <LoggedInContainer curActiveScreen="playlist">
        <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex items-center justify-center" >
            <div className="bg-white w-1/3 text-black">
                <div>create playlist</div>
                <div><TextInput label="name" placeholder="name" value={playlistName} setValue={setplaylistName}/>
        </div>
        <div><TextInput label="Thumbnail" placeholder="thumbnail" value={playlistThumbnail} setValue={setplaylistThumbnail}
        />
        </div>
        <div className="flex items-center justify-center rounded-full py-2" onClick={createPlaylist}>create</div>
        </div>
            
        </div></LoggedInContainer>
    )
}
export default Playlist