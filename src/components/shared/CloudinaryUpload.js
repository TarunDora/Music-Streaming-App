
import {openUploadWidget} from "../../utils/CloudinaryServices.js"
import {cloudinary_upload_preset} from '../../config.js'
const CloudinaryUpload=({setUrl,setName})=>{
    const UploadImageWidget=()=>{
        
        let myUploadWidget=openUploadWidget(
            {
                cloudName:"dovvo4aog",
                uploadPreset:cloudinary_upload_preset,
                sources:["local"],
            },
            function(error,result){
                if(!error && result.event==="success"){
                    setUrl(result.info.secure_url)
                    setName(result.info.original_filename)
                    //props.onImageUpload(result.info.public_id)
                }else{
                    //alert("could not upload")
                    if(error){
                    console.log(error)}
                }
            }
        )
        myUploadWidget.open()
    }
    return(
        <button className="bg-green text-black rounded-full p-4 font-semibold" onClick={UploadImageWidget}>
            Select Track
        </button>
    )
}
export default CloudinaryUpload