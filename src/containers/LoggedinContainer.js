import { Icon } from '@iconify/react';
import {Howl,Howler} from "howler"
import IconText from "../components/shared/IconText"
import TextwithHover from "../components/shared/Textwithhover"
import {useState} from "react"
import songContext from '../contexts/songContext';
import {useContext,useLayoutEffect,useRef} from "react"
const LoggedInContainer=({children,curActiveScreen})=>{
    //const [createPlaylistModalOpen]=useState(false)
      //  const [setcreatePlaylistModalOpen]=useState(false)
    const {currentSong,setCurrentSong,isPaused,setIsPaused,soundPlayed,setSoundPlayed}=useContext(songContext)
    //console.log(currentSong)
    const firstUpdate=useRef(true)
    useLayoutEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current=false
            return
        }
        if(!currentSong){
            return;
        }
        //console.log("here")
        changeSong(currentSong.track)
    },[currentSong && currentSong.track])
    const playSound=()=>{
        if(!soundPlayed){
            return;
        }
        soundPlayed.play()
    }
    const changeSong=(songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop()
        }
    
    let sound = new Howl({
        src: [songSrc],
        html5: true
      });
    setSoundPlayed(sound)
      sound.play();
      setIsPaused(false)
    //console.log(sound)
    }
    const pauseSound=()=>{
        soundPlayed.pause()
    }
    const togglePlayPause=()=>{
        if(isPaused){
            playSound(currentSong.track)
        setIsPaused(false)}
        else{
            pauseSound()
            setIsPaused(true)
        }
    }
    return(
        <div className="h-full w-full ">
            
        <div className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
                <div className="logoDiv" p-6 >
                <Icon icon="arcticons:wynk-music" width="100"/>
                
            
            
                <IconText iconName={"ic:sharp-home"} displayText={"Home"}  active={curActiveScreen==="home"}targetLink={"/home"}/>
                <IconText iconName={"ic:outline-search"} displayText={"Search"} active={curActiveScreen==="search"} targetLink={"/search"}/>
                <IconText iconName={"ic:baseline-info"} displayText={"About Us"} active={curActiveScreen==="aboutus"} targetLink={"/aboutus"}/>
                <IconText iconName={"fluent:library-20-regular"} active={curActiveScreen==="library"}displayText={"Library"} targetLink={"/library"}/>
                <IconText iconName={"ri:music-fill"} displayText={"My Music"}active={curActiveScreen==="myMusic"} targetLink={"/myMusic"}/>
        
            <br/>
            <IconText iconName={"basil:add-solid"} displayText={"Create Playlist"} active={curActiveScreen==="playlist"}targetLink={"/playlist"}/>
            
            <IconText iconName={"ph:heart-fill"} displayText={"Liked Songs"}/>
            <br/>
            <p className="border border-gray-200 px-5 text-color-black  flex py-2 rounded-full justify-start hover"><Icon icon="mingcute:earth-line"/>  English</p>
            </div>
            <div clasName=" w-4/5 bg-app-black flex items-center justify-end">
            <div className="navbar  w-full flex hover:text-red items-center justify-around"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><TextwithHover displayText={"Premium"}/>&nbsp;&nbsp;<TextwithHover displayText={"Support"}/>
            &nbsp;&nbsp;<TextwithHover displayText={"Download"}/>
            &nbsp;&nbsp;<IconText displayText={"Upload Song"}active={curActiveScreen==="uploadSong"} targetLink={"/uploadSong"}/><div className="px-3 py-2 flex items-center justify-center h-2/3 rounded-full cursor-pointer">|    AC</div>
            </div>
            

            <div className="content p-8">{children} </div>
            </div>
        </div>
        {
            currentSong && (
        <div className='h-1/6 bg-black-opacity-30'>
            <img  src={currentSong.thumbnail} alt='currentsongthumbnail' height='100' width='100'/><div>{currentSong.name}  <br/>{currentSong.artist.firstName+currentSong.artist.lastName} </div>
        <div className='w-1/4 flex justify-center items-center'>
        <Icon icon="ph:shuffle-light" className="text-xl cursor-pointer hover:text-white" font-size={30} />
        &nbsp;&nbsp;&nbsp; <Icon icon="foundation:previous" className="text-xl cursor-pointer hover:text-white" />&nbsp;&nbsp;&nbsp;
            <Icon icon={isPaused?"mdi:play":"ic:baseline-pause"} className="text-xl cursor-pointer hover:text-white" onClick={togglePlayPause}/>
            &nbsp;&nbsp;&nbsp;
            <Icon icon="subway:next" className="text-xl cursor-pointer hover:text-white"/>&nbsp;&nbsp;&nbsp;
            <Icon icon="pajamas:repeat" className="text-xl cursor-pointer hover:text-white"/>
        </div><div><Icon icon="ph:heart-fill" className="text-xl cursor-pointer hover:text-white"/></div>
        </div>)}
        </div>
    )
}

export default LoggedInContainer