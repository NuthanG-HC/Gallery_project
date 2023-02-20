import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineSearch} from "react-icons/ai";
import './Gallery.css'
import {Link} from 'react-router-dom'
const Beaches =()=>{
    const [image,setImage] = useState([])
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c5a4ea19746b781fd5d6577f9cf573f5&tags=beaches&per_page=10&page=1&format=json&nojsoncallback=1`)
        .then(data => {
          let value = data.data.photos.photo.map((pic)=>{
           return  (`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`)
           
          })
           setImage(value)
        })
        .catch(err => console.log(err))
    
   
    
    return(
        <>
        <h1><i>SnapShot</i></h1>
        <div id="inputArea">
        <input type="text" id="search"  placeholder='Search...' />
        <button ><AiOutlineSearch/></button>
        </div>
        <div id="btnArea">
        <Link to="/Mountain"><button className='btn' >Mountain</button></Link> 
           <Link to="/Beaches"><button className='btn'>Beaches</button></Link>
            <Link to="/Birds"><button className='btn'>Birds</button></Link>
            <Link to="/Foods"><button className='btn'>Food</button></Link> 
        </div>
        <div id="imageArea">
        {
            image.map((val,i)=>{
                return (
                    <img src={val} key={i} alt='nuthan.img'/>
                )
            })
        }
        </div>
        </>
    )
}
export default Beaches