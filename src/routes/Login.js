import { Icon } from '@iconify/react';
import Textinput from "../components/shared/Textinput"
import Passwordinput from "../components/shared/Passwordinput"
import {useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers"
import {useCookies} from "react-cookie"
const LoginComponent=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cookies,setCookie]=useCookies(["token"])
    const navigate=useNavigate()
    const login=async()=>{
        const data={email,password}
        //console.log(data)
        const response =await makeUnauthenticatedPOSTRequest("/auth/login",data)
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
                <div className="font-bold mb-6">To continue ,log in to Beatbox</div>
                <Textinput label="Email ID or Username" placeholder="Email ID or Username"
                className="my-2"
                value={email}
                setValue={setEmail}
                />
                                <Passwordinput label="Password" placeholder="Password" value={password}
                setValue={setPassword}/>
                                <div className=" w-full flex items-center justify-end my-8  ">
                <button className="bg-green-300 font-semibold p-3 px-10 rounded-full" onClick={(e)=>{
                    e.preventDefault()
                    login()
                }}>LOG IN</button>
                </div>
                <div className="w-full border border-solid border-gray-200 "></div>
                <div className="my-6 font-semibold text-lg">Don't have an account?</div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/signup">Sign Up For BeatBox</Link>
                </div>
            </div>
        </div>
    )
}
export default LoginComponent