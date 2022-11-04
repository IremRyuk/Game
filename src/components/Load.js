import React, { useEffect, useState } from "react";
import '../styles/Load/load.css';
import $ from 'jquery'

export default function Load(){
    useEffect(()=>{
        setTimeout(()=>{
            $('.left').css({left:'-100%'})
            $('.right').css({right:'-100%'})
        },500)
        setTimeout(()=>{
            $('.load').css({display:'none'})
        },700)
        // get scroll position
        // let count = setTimeout(()=>{
        //     window.addEventListener('scroll',()=>{console.log(window.scrollY)})            
        // },1)
        // return ()=>clearTimeout(count)
        // after some pixels launch Bot();
        // get scroll position
    })
// scroll to Top
$(window).on('beforeunload',function(){
    $(window).scrollTop(0)
}) 
window.onbeforeunload = function play(){
    window.scrollTo(0,0)
}
// scroll to Top
    return(
        <div className="load">
            <div className="left"></div>
            <div className="right"></div>
        </div>
    )
}