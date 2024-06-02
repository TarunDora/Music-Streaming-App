
import "./output.css"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import LoginComponent from "./routes/Login"
import SignupComponent from "./routes/Signup"
//import Home from "./routes/Home"
import LoggedinHome from "./routes/Loggedinhome"
import UploadSong from "./routes/UploadSong"
import MyMUsic from "./routes/MyMusic"
import {useCookies} from "react-cookie"
import AboutPage from "./about.js"
import {useState} from "react"
import SearchPage from "./routes/SearchPage.js"
import songContext from "./contexts/songContext.js"
import Playlist from "./modals/Playlist.js"
import Library from "./routes/Library.js"
import AddToPlaylist from "./modals/AddtoPlaylist.js"
function App() {
  const [currentSong,setCurrentSong]=useState(null)
  const [soundPlayed,setSoundPlayed]=useState(null)
  const [isPaused,setIsPaused]=useState(null)
  const [cookie,setCookie]=useCookies(["token"])
  //console.log(cookie.token)
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      
      {
        cookie.token?(<songContext.Provider value={{currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused}}>
<Routes>
      
        <Route path="/" element={<HelloComponent/>}></Route>
        <Route path="/aboutus" element={<AboutPage/>}></Route>
      <Route path="/home" element={<LoggedinHome/>}></Route>
      <Route path="/uploadSong" element={<UploadSong/>}></Route>
      
      <Route path="/myMusic" element={<MyMUsic/>}></Route>
      <Route path="/search" element={<SearchPage/>}></Route>
      <Route path="/playlist" element={<Playlist/>}></Route>
      
      <Route path="/library" element={<Library/>}></Route>
      <Route path="*" element={<Navigate to="/home"/>}></Route>
      </Routes></songContext.Provider>):(
      <Routes>
<Route path="/login" element={<LoginComponent/>}/>
        <Route path="/signup" element={<SignupComponent/>}/>
        <Route path="*" element={<Navigate to="/login"/>}></Route>
        
      </Routes>
      )}
      </BrowserRouter>
  </div>
  );
}
const HelloComponent=()=>{
  return(
    <div>this is hello from component</div>
  )
}
export default App;