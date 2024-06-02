import { Icon } from '@iconify/react';
import { useState } from 'react';
import LoggedInContainer from "../containers/LoggedinContainer"


import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import SingleSongCard from '../components/shared/SingleSongCard';
const SearchPage=()=>{
    const [searchText,setsearchText]=useState("")
    const [songData,setSongData]=useState([])
    const searchSong=async()=>{
        const response=await makeAuthenticatedGETRequest("/song/get/songname/"+searchText)
        setSongData(response.data)

        setsearchText("")
    }
    return(<LoggedInContainer curActiveScreen="search">
        <div className="w-full bg-pink-400 flex">
            <Icon icon={"ic:baseline-search"}/>
            <input type="text" placeholder="what do u want to listen" className="w-1/3 p-3 text-sm rounded-full bg-app-black text-black" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value)
            }} onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    searchSong()
                }
            }}/>
        </div>{ songData.length>0?
        <div>
            showing search results for {searchText}
            {songData.map(item=>{
                return <SingleSongCard info={item} key={JSON.stringify(item)} playSound={()=>{}}/>
            })}
        </div>:<div>nothing to show here, please try modifying the search key</div>}
    </LoggedInContainer>)
}
export default SearchPage