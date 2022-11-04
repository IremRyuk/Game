import React from 'react'
import '../styles/ItemSelect/itemselect.css'
import { useParams } from 'react-router-dom'
import Data from '../storage/data.json'
import $ from 'jquery'

export default function ItemSelect() {
    let {ID} = useParams()
    let filtered = Data.filter(res=>res.id == ID)
let Mains = filtered[0]
let resize = true
let bigSmall = () => {
    if(resize){
    $('.itemImg').css({justifyContent:'center',scale:'1.3',cursor:'zoom-out'})
    return resize = false
    }else{
        $('.itemImg').css({justifyContent:'center',scale:'1',cursor:'zoom-in'})
        return resize = true
    }
}
  return (
    <>
    <center>
    <div className='itemSelect'>
        <div className='itemLeft'>
            <img src={Mains.img} alt={Mains.name} className='itemImg' onClick={()=>{bigSmall()}}/>
        </div>
        <div className='itemRight'>
            <p className='itemFont'><b>Name:</b> {Mains.name}</p>
            <p className='itemFont'><b>Lang:</b> {Mains.lang}</p>
            <p className='itemFont'><b>Category:</b> {Mains.category}</p>
            <p className='itemFont'><b>Release Date:</b> {Mains.date}</p>
            <p className='itemFont'><b>Desc:</b> {Mains.descr}</p>
        </div>
    </div>
    <div className='itemTrailer'>
        Here must be Youtube link
    </div>
    </center>
    </>
  )
}
