import React, { useEffect, useRef, useState } from 'react';
import './timer.css'
const CountDown =()=>{
    const [count ,setCount] = useState("");
    const time = useRef(0);
    function handle(e){
      setCount(Math.floor(e.value))
    }
    function handle1(){
      document.getElementById('num').value =""
      time.current = setInterval(()=>setCount(prev=>prev -1),1000)  
  }
    useEffect(()=>{
     if(count<=0){
      clearInterval(time.current)
     }
     
    },[count])
    return (
      <>
      <input type="number" id="num" placeholder="Enter the Number" onKeyPress={(e)=>{if(e.key ==="Enter") handle1(e)
        else setCount(0)}} onChange={(e)=>{handle(e.target)}}/>
      <div id="res">#COUNT:<span>{count}</span></div>
      </>
    )
  }
  export default CountDown