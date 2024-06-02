const PasswordInput=({label,placeholder,className,value,setValue})=>{
    return(
    <div className="textInputDiv flex flex-col space-y-2 w-full">
        <label for={label} className="font-semibold">{label}</label>
         <input type="password" placeholder={placeholder} className="text-black p-2 border border-solid border-gray-400 rounded placeholder-gray-500 "id=
         {label} value={value}
         onChange={(e)=>{
            setValue(e.target.value)}}/>
    </div>
    )
}
export default PasswordInput