import { Icon } from '@iconify/react';
import {Howl,Howler} from "howler"
import IconText from "../components/shared/IconText"
import TextwithHover from "../components/shared/Textwithhover"
import {useState} from "react"
import LoggedInContainer from '../containers/LoggedinContainer';
const focuscardsdata=[{title:"peaceful piano",description:"shdcsdv",image:"https://img.freepik.com/free-photo/elegant-grand-piano-indoors-scene-generative-ai_188544-7785.jpg"},{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces", image:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"},
{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces", image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"}
,{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces" ,image:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"},{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces" ,image:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"}];
const LoggedinHome=()=>{
    return(
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView title="Sea" cardsdata={focuscardsdata}/>
            <PlaylistView title="Sky" cardsdata={focuscardsdata}/>
            <PlaylistView title="Fire" cardsdata={focuscardsdata}/>
        </LoggedInContainer>
    )
}
//const LoggedinHome=()=>{
 /*   const [soundPlayed, setSoundPlayed]=useState(null)
    const [isPaused,setIsPaused]=useState(true)
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
    const pauseSound=()=>{
        soundPlayed.pause()
    }
    const togglePlayPause=()=>{
        if(isPaused){
            playSound("https://res.cloudinary.com/dovvo4aog/video/upload/v1701411138/rsvseg5mb4tduwbcvefg.mp3")
        setIsPaused(false)}
        else{
            pauseSound()
            setIsPaused(true)
        }
    }
    return(
        <div className="h-full w-full ">
        <div className="h-3/4 w-full flex">
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
            

            <div className="content p-8"> <PlaylistView title="Focus" cardsdata={focuscardsdata}/>
            <PlaylistView title="study" cardsdata={focuscardsdata}/>
            <PlaylistView title="exam" cardsdata={focuscardsdata}/></div>
            </div>
        </div>
        <div className='h-1/6 bg-black-opacity-30'>
            <img src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt='img' height='100' width='100'/><div><div>curtains</div><div>ed sheera</div>
        </div>
        </div>
        <div className='w-1/2 flex justify-center h-full'>
            <div>

            </div>
        </div>
        <div className='w-1/4 flex justify-center items-center'>hello
        <Icon icon="ph:shuffle-light" className="text-xl cursor-pointer hover:text-white" font-size={30} />
        &nbsp;&nbsp;&nbsp; <Icon icon="foundation:previous" className="text-xl cursor-pointer hover:text-white" />&nbsp;&nbsp;&nbsp;
            
            <Icon icon={isPaused?"mdi:play":"ic:baseline-pause"} className="text-xl cursor-pointer hover:text-white" onClick={togglePlayPause}/>
            &nbsp;&nbsp;&nbsp;
            <Icon icon="subway:next" className="text-xl cursor-pointer hover:text-white"/>&nbsp;&nbsp;&nbsp;
            <Icon icon="pajamas:repeat" className="text-xl cursor-pointer hover:text-white"/>
        </div>
        </div>
    )
//}*/
const PlaylistView=({title,cardsdata})=>{
    return(
        <div className=""><div className='text-xl font-semibold'>{title}</div>
        <div className='bg-black'>g</div>
        <div className='flex'>
            {cardsdata.map(item=>{
                return <Card title={item.title} description={item.description} image={item.image}/>
            })
            }</div></div>
    )
}
const Card=({title,description,image})=>{
    return(
        <div className="bg-black bg-opacity-30 w-1/6 p-4 ">
            <div className='rounded-lg py-4'>
                <img className="w-full rounded-md h-50" src={image} alt="label img"/>
            </div>
            <div className='text-red'>{title}</div>
            <div className='text-gray-500 text-sm'>{description}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default LoggedinHome