import LoggedInContainer from "../containers/LoggedinContainer"
import {useState,useEffect} from "react"
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers"

const Library=()=>{
    const [myPlaylists,setMyPlaylists]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthenticatedGETRequest("/playlist/get/me")
            setMyPlaylists(response.data)
            
        }
        getData();
    })
    return(<LoggedInContainer curActiveScreen={"library"}>
        <div className="text-white text-xl">My Playlists</div><div className="flex py-4 grid gap-4 grid-cols-5 cursor-pointer">
            {myPlaylists.map(item=>{
                return <Card key={JSON.stringify(item)} title={item.name} description="" image={item.thumbnail}/>
            })}
        </div>
    </LoggedInContainer>)
}
const Card=({title,description,image})=>{
    return(
        <div className="bg-black bg-opacity-30 w-full p-4 ">
            <div className='rounded-lg py-4'>
                <img className="w-full rounded-md h-50" src={image} alt="label img"/>
            </div>
            <div className='text-red'>{title}</div>
            <div className='text-gray-500 text-sm'>{description}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default Library