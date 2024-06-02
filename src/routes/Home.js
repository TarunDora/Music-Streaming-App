import { Icon } from '@iconify/react';
import IconText from "../components/shared/IconText"
import TextwithHover from "../components/shared/Textwithhover"
const focuscardsdata=[{title:"peaceful piano",description:"shdcsdv",image:"https://img.freepik.com/free-photo/elegant-grand-piano-indoors-scene-generative-ai_188544-7785.jpg"},{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces", image:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"},
{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces", image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"}
,{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces" ,image:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"},{title:"Peaceful Piano", description:"Relax and indulge with beautiful piano pieces" ,image:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"}];
const Home=()=>{
    return(
        <div className="h-full w-full flex">
        
                <div className="logoDiv" p-6 >
                <Icon icon="arcticons:wynk-music" width="100"/>
                
            
            
                <IconText iconName={"ic:sharp-home"} displayText={"Home"} active/>
                <IconText iconName={"ic:outline-search"} displayText={"Search"} />
                <IconText iconName={"fluent:library-20-regular"} displayText={"Library"}/>
        
            <br/>
            <IconText iconName={"basil:add-solid"} displayText={"Create Playlist"}/>
            <IconText iconName={"ph:heart-fill"} displayText={"Liked Songs"}/>
            <br/>
            <p className="border border-gray-200 px-5 text-color-black  flex py-2 rounded-full justify-start hover"><Icon icon="mingcute:earth-line"/>  English</p>
            <p style={{"color":"white"}}>FeedBack Form</p>
            <p>About Us</p>
            </div>
            <div clasName=" w-4/5 bg-app-black flex items-center justify-end">
            <div className="navbar  w-full flex hover:text-red items-center justify-around"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><TextwithHover displayText={"Premium"}/>&nbsp;&nbsp;<TextwithHover displayText={"Support"}/>
            &nbsp;&nbsp;<TextwithHover displayText={"Download"}/>
            &nbsp;&nbsp;<TextwithHover displayText={"Sign Up"}/><div className="px-3 py-2 flex items-center justify-center h-2/3 rounded-full cursor-pointer">|    Log IN</div>
            </div>
            

            <div className="content p-8"> <PlaylistView title="c" cardsdata={focuscardsdata}/>
            <PlaylistView title="a" cardsdata={focuscardsdata}/>
            <PlaylistView title="d" cardsdata={focuscardsdata}/></div>
            </div>
        </div>
    )
}
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
export default Home