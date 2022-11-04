import React, { useEffect, useState } from 'react'
import '../styles/Offer/offer.css'
import $ from 'jquery'

export default function Offer() {
    let [compNames,setCompName] = useState('')
    let [gameNames,setGameName] = useState('')
    let [invs,setInv] = useState('')
    useEffect(()=>{
        // offer
        if(compNames.length == 0 || gameNames.length == 0 || invs.length == 0){
            $('#submit').removeClass('attrAddBtnG')
            $('#submit').addClass('attrAddBtn')
        }else{
            $('#submit').removeClass('attrAddBtn')
            $('#submit').addClass('attrAddBtnG')
        }
        // jobs
        if(place == 'none'){
            $('.jobsInp').css({display:'none'})
        }else{
            $('.jobsInp').css({display:'block'})
        }
    })
    // mainCity
    let OfGame = () => {
        // $('.centers').css({display:'none'})
        $('.jobs').css({display:'none'})
        $('.offer').css({display:'block'})
    }
    let OfJoBs = () => {
        // $('.centers').css({display:'none'})
        $('.offer').css({display:'none'})
        $('.jobs').css({display:'block'})
    }
    // Offer
    class OfferGame {
        constructor(companyName,gameName,Investor){
            this.compname = companyName
            this.gamename = gameName
            this.investor = Investor
        }
    }
    let x = new OfferGame(compNames,gameNames,invs)
    let sendOfferInfo = (e) => {
        $('.ghost').css({right:'10%'})
        e.preventDefault()
        alert('infomtaion sent Check in Console')
        console.log(x)
    }
    // Jobs
    let [position,setPosition] = useState('none')
    let [place,setPlace] = useState('none')
    let [selfInfo,setSelfInfo] = useState('')
    let [name,setPerName] = useState('')
    let [mail,setPerMail] = useState('')
    class Jobs {
        constructor(name,mail,position,place,selfInfo){
            this.name = name
            this.mail = mail
            this.position = position
            this.place = place
            this.selfInfo = selfInfo
        }
    }
    let personInfoJobs = new Jobs(name,mail,position,place,selfInfo)
    let jobs = (e) => {
e.preventDefault()
alert('information in console and ready to config in Gmail')
console.log(personInfoJobs)
$('.ghost').css({right:'10%'})
    }   
  return (
    <>
        <center className="centers"><i className="fa-solid fa-arrow-left-long" /><p className='cenP'>Choose Side</p><i className="fa-solid fa-arrow-right-long" /></center>
    <div className='mainCity'>
        <p className='cityP' onClick={()=>{OfGame()}}>Offer Game</p>
        <p className='cityP' onClick={()=>{OfJoBs()}}>Jobs On Our Page</p>
    </div>
  <div className='offer'>
    <center>
    <form onSubmit={sendOfferInfo} className="offerForm">
        <label className='offLab'>Company Name</label>
        <br />
        <input type='text' placeholder='type...' onChange={(e)=>{setCompName(e.target.value)}} className="ofInp" />
        <br />
        <label className='offLab'>Game Name</label>
        <br />
        <input type='text' placeholder='type...' onChange={(e)=>{setGameName(e.target.value)}} className="ofInp" />
        <br />
        <label className='offLab'>Investor Name</label>
        <br />
        <input type='text' placeholder='type...' onChange={(e)=>{setInv(e.target.value)}} className="ofInp" />
<p></p>
        <input type='submit' id='submit' disabled={compNames.length == 0 || gameNames.length == 0 || invs.length == 0} className='offerSubmit'/>
    </form>
    </center>
    </div>
    <div className='jobs'>
        <center>
        <form className='jobsForm' onSubmit={jobs}> 
        <label className='offLab'>Positions</label>
            <select className='jobsSec' onChange={(e)=>{setPosition(e.target.value)}}>
                <option className='opt' value=''>none</option>
                <option className='opt' value='moderator' >Moderator</option>
                <option className='opt' value='desigren'>Designer</option>
                <option className='opt' value='hr'>Hr</option>
            </select>
            <select className='jobsSec' onChange={(e)=>setPlace(e.target.value)}>
                <option className='opt' value='none'>None</option>
                <option  className='opt' value='office'>Office</option>
                <option className='opt' value='remote'>Remote</option>
            </select>
            <input type='text' placeholder='name...' className='jobsInp' onChange={e=>setPerName(e.target.value)} required/>
            <br />
            <input type='text' placeholder='mail...' className='jobsInp' onChange={e=>setPerMail(e.target.value)} required/>
            <textarea className='jobsTxt' required onChange={(e)=>setSelfInfo(e.target.value)} />
            <br />
            <input type='submit' className='jobSub' value='Submit' />
        </form>
        </center>
    </div>
    <div
                className='ghost'
                onClick={() => {
                    $('.ghost').css({right: '-100%'})
                }}>
                Sent
            </div>
    </>
  )
}
