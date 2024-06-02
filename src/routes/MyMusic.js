import {useState} from "react"
import {useEffect} from "react"
import { Icon } from '@iconify/react';
import {Howl, Howler} from 'howler';
import IconText from "../components/shared/IconText"
import CloudinaryUpload from '../components/shared/CloudinaryUpload'
import TextwithHover from "../components/shared/Textwithhover"
import LoggedInContainer from "../containers/LoggedinContainer";
import TextInput from "../components/shared/Textinput"
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import {useNavigate} from "react-router-dom"
import SingleSongCard from "../components/shared/SingleSongCard";
import {makeAuthenticatedGETRequest} from "../utils/serverHelpers";
const songData=[{thumbnail:"https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" , name:"curtains" ,artist:"ed sheeran"}]

const MyMusic=()=>{
    const [songData,setSongData]=useState([])
    useEffect(()=>{
        const getData=async()=>{
        const response =await makeAuthenticatedGETRequest("/song/get/mysongs")
        setSongData(response.data)}
        getData()
    },[])
    return(
        <LoggedInContainer curActiveScreen={"myMusic"}>
            <div className="content p-8 pt-0 overflowauto">My Songs
            {songData.map((item)=>{
                return <SingleSongCard info={item} playSound={()=>{}}/>
            })}</div>
        </LoggedInContainer>
    )
}
/*const MyMusic=()=>{
    const [songData,setSongData]=useState([])
    const [soundPlayed, setSoundPlayed]=useState(null)
    const playSound=(songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop()
        }
    
    let sound = new Howl({
        src: [songSrc],
        html5: true
      });
    setSoundPlayed(sound)
      sound.play();
    console.log(sound)}
    useEffect(()=>{
        const getData=async()=>{
        const response =await makeAuthenticatedGETRequest("/song/get/mysongs")
        setSongData(response.data)}
        getData()
    },[])
    
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
            <div className="content p-8 pt-0 overflowauto">My Songs
            {songData.map((item)=>{
                return <SingleSongCard info={item} playSound={playSound}/>
            })}</div>
            </div>
        </div>
    )
}
*/
export default MyMusic