import { Icon } from '@iconify/react';
import {Link} from "react-router-dom"
const IconText=({iconName,displayText,active,targetLink,onClick})=>{
    return(
    <Link to={targetLink} className="block">
    
    <div className="flex items-center justify-start cursor-pointer" onClick={onClick}>
        <div className="px-5 py-2"> <Icon icon={iconName} color={active?"red":"gray"} fontSize={35}/></div>
        <div className={`${active?"text-blue":"text-green-400"} text-sm font-semibold hover:text-pink`}>{displayText}
            
        </div>
        </div></Link>
    )
}
export default IconText