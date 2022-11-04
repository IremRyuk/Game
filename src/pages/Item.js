import React, { useEffect, useState } from 'react'
import '../styles/Item/item.css'
import {Link} from 'react-router-dom'

export default function Item(props) {
  let main = props.main
  let [giveMini,setGiveMini] = useState(window.innerWidth)
  useEffect(()=>{
window.addEventListener('resize',()=>{
  setGiveMini(window.innerWidth)
})
  },[])
  let linkTo = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <Link to={`/itemSelect/${main.id}`} style={{textDecoration:'none'}} onClick={()=>{linkTo()}}><div className='item'>
      <center>
      <p className='item-headerTop'>{main.name}</p>
      <img src={main.img} className="item-images" alt={main.name} />  
      <p className='item-headerDown'> {main.date}</p>
      </center>
    </div></Link>
    {giveMini<=900 && 
    <Link to={`/itemSelect/${main.id}`} style={{textDecoration:'none'}}><div className='itemMini'>
      <div className='item-mini-image-box'>
        <img src={main.img}  className="item-images-mini"/>
      </div>
      <div className='item-mini-properties'>
        <p className='item-mini-descr'><b>Name:</b> {main.name}</p>
        <p className='item-mini-descr'><b>Lang:</b> {main.lang}</p>
        <p className='item-mini-descr'><b>Release Date:</b> {main.date}</p>
        <p className='item-mini-descr'><b>Description:</b> {main.descr}</p>
      </div>
    </div></Link>}
    </>
  )
}
