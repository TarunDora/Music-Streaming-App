const TextwithHover=({displayText,active})=>{
    return(<div className="flex items-center justify-start cursor-pointer">
        <div className={`${active?"text-purple":"text-green-400"} font-semibold hover:text-pink text-lg`}>{displayText}
            
        </div>
        </div>
    )
}
export default TextwithHover