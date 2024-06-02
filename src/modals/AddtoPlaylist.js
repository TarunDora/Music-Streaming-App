import LoggedInContainer from "../containers/LoggedinContainer"
import { useState ,useEffect} from "react"
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers"

const AddToplaylist=()=>{
    
    const [myPlaylists,setMyPlaylists]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthenticatedGETRequest("/playlist/get/me")
            setMyPlaylists(response.data)
        }
        getData();
    },[])
   return( <LoggedInContainer curActiveScreen="addplaylist">
        <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex items-center justify-center" >
            <div className="bg-white w-1/3 text-black">
                <div>select playlist</div>
                <div>
        </div>
        <div className="flex items-center justify-center rounded-full py-2" >create</div>
        </div>
            
        </div></LoggedInContainer>)
}
const PlayListComponent=({info})=>{
    return(
        <div className="bg-app-black flex">
        <div><img src={info.thumbnail}/></div>
        <div>
            {info.name}</div></div>
    )
}
export default AddToplaylist