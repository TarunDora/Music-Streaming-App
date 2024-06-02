import {useContext} from "react"
import songContext from "../../contexts/songContext"
const SingleSongCard=({info,playSound})=>{
    const {currentSong,setCurrentSong}=useContext(songContext)
    //console.log(info)
//const val=useContext(songContext)
  //  console.log(val)
    return(
        <div className="flex hover:opacity-gray-400 hover:bg-opacity-20 p-2 rounded-sm" onClick={()=>{setCurrentSong(info)}}><div className="w-10 h-10 bg-cover bg-center" style={{backgroundImage:`url("${info.thumbnail}")`}}>
        
        </div>
        <div className="text-white flex justify-center items-center flex-col pl-4 ">
            <div>
                {info.name}
            </div>
            <div className="text-xs text-gray-400">
                {info.artist.firstName+''+info.artist.lastName}
            </div>
            
        </div>
            </div>
    )
}
export default SingleSongCard