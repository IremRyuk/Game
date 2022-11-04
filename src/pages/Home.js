import React, { useEffect,useState } from "react";
import '../styles/Home/home.css'
import Data from '../storage/data.json'
import Item from './Item'
import { Link } from "react-router-dom";

export default function Home(){
    let [current,setCurrent] = useState(0)
    let [data,setData] = useState(Data)
    let [text,setText] = useState('')
    useEffect(()=>{
        let slide = setInterval(()=>{
            if(current<slideshow.length-1){
                setCurrent(current+1)
            }else if(current === 3){
                setCurrent(current = 0)
            }
        },1700)
        return ()=>clearInterval(slide)
    })
    let slideshow = [
        "https://rootblog.pl/wp-content/uploads/2021/07/need_for_speed_underground_2-1160x672.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427",
        "https://i0.wp.com/www.fiz-x.com/wp-content/uploads/2013/10/gta-v-big.jpg?ssl=1",
        "https://image.winudf.com/v2/image/aW8uZ2FyZG9sYXBwLnNreXJpbW1vYmlsZW1zX3NjcmVlbl8wXzE1MzgxODk4ODBfMDI1/screen-0.jpg?fakeurl=1&type=.jpg",
        
    ]
    let filter = (categories) =>{
        setData(Data.filter(res=>res.category===categories))
    }
    return(
        <div className="home">
            <Link to='/request'><div className="offerAD">Request</div></Link>
            <div className="slideshow">
                <img src={slideshow[current]} alt='IremRyuk' className="slide-home" />
            </div>
            <div>
                <div className="category">
                    <p className="categ">Categories</p>
                    <button onClick={()=>setData(Data)} className="buttonf" style={{outline:'none'}}>ALL</button>
                    <button onClick={()=>filter('advanture')} className="buttonf" style={{outline:'none'}}>Advanture</button>
                    <button onClick={()=>filter('racing')} className="buttonf" style={{outline:'none'}}>Racing</button>
                    <button onClick={()=>filter('shooting')} className="buttonf" style={{outline:'none'}}>Shooting</button>
                    <button onClick ={()=>filter('RPG')} className="buttonf" style={{outline:'none'}}>RPG</button>
                    <button onClick={()=>filter('openworld')} className="buttonf" style={{outline:'none'}}>Open World</button>
                </div>
            </div>
            <center>
                <input type='text' className="search-input" placeholder="search..." onChange={(e)=>setText(e.target.value)} />
            </center>
            <center>
            <div className="mainItems">
                {data.filter(res=>{
            if(text === ''){
                return Data
            }else if(res.name.toLowerCase().includes(text.toLowerCase())){
                return text
            }
        }).map(res=><Item main={res} key={res.id} />)}
            </div>
            </center>
        </div>
    )
}