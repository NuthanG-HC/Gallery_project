import React from "react"
import "./App.css"
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Gallery from "./components/Gallery"
import CountDown from "./components/timer"
import Mountain from "./components/Mountain"
import Beaches from "./components/Beaches";
import Birds from "./components/Birds";
import Foods from "./components/Foods";
const App =()=>{
  return(
    <>
    {/* <CountDown/> */}
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Gallery/>} />
      <Route path="/mountain" element={<Mountain/>} />
      <Route path="/beaches" element={<Beaches/>} />
      <Route path="/birds" element={<Birds/>} />
      <Route path="/foods" element={<Foods/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App