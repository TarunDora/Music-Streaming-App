import {useState} from "react"
import {useCookies} from "react-cookie"
import { Icon } from '@iconify/react';
import Textinput from "../components/shared/Textinput"
import Passwordinput from "../components/shared/Passwordinput"
import {Link,useNavigate} from "react-router-dom"
//import {} from "react-router-dom"
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers"
const SignupComponent=()=>{
    const [email,setEmail]=useState("")
    const [confirmEmail,setConfirmEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [firstName,setfirstname]=useState("")
    const [lastName,setlastname]=useState("")
    const [cookie,setCookie]=useCookies(["token"])
    const navigate=useNavigate()
    const signup=async()=>{
        if(email!==confirmEmail){
            alert("Email and confirm email must match, please check again")
        }
        const data={email,password,username,firstName,lastName}
        //console.log(data)
        const response =await makeUnauthenticatedPOSTRequest("/auth/register",data)
        if(response && !response.err){
            //console.log(response)
            const token=response.token
            const date=new Date()
            date.setDate(date.getDate()+30)
            setCookie("token",token,{path:"/",expires:date})
            alert("success")
            navigate("/home")
        }
        else{
            alert("failure")
        }
    }
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-200 w-full flex justify-center">
            <Icon icon="arcticons:wynk-music" width="100"/>
            </div>
            <div className="inputRegion w-1/3 py-10 flex flex-col items-center justify-center flex-col">
                <div className="font-bold mb-6">SignUp For free to start Listening</div>
                <Textinput  label="Email ID " placeholder="Enter your Email ID "
                className="my-6"
                value={email}
                setValue={setEmail}
                />
                <Textinput label="Confirm Email ID " placeholder="Enter your Email again "
                className="mb-6"
                value={confirmEmail}
                setValue={setConfirmEmail}
                />
                <Textinput label="Username" placeholder="Enter your User name "
                className="mb-6" 
                value={username}
                setValue={setUsername}
                />
                                <Passwordinput type="password"label="Create Password" placeholder="Enter a Strong Password here" value={password}
                setValue={setPassword}/>
                                <div className=" w-full flex items-center justify-center my-8  ">
                                    <div className="w-full flex justify-between items-center space-x-8">
                                    <Textinput label="first name" placeholder="Enter your first name "
                className="my-6" value={firstName}
                setValue={setfirstname}
                />
                <Textinput  label="lastname" placeholder="Enter your lastname "
                className="my-6"value={lastName}
                setValue={setlastname}
                />
                                    </div>
                                
                <button className="bg-green-300 font-semibold p-3 px-10 rounded-full " onClick={e=>{
                    e.preventDefault()
                    signup()
                }}>SIGN UP</button>
                </div>
                <div className="w-full border border-solid border-gray-200 "></div>
                <div className="my-6 font-semibold text-lg">Already have an account?</div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/login">Log in instead</Link>
                </div>
            </div>

        </div>
    )
}
export default SignupComponent