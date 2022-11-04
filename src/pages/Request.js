import React, {useState} from 'react'
import '../styles/Request/request.css'
import $ from 'jquery'

export default function Request() {
    let [name, setName] = useState('')
    let [descr, setDescr] = useState('')
    let [date, setDate] = useState()
    class Info {
        constructor(name, desc, date) {
            this.name = name
            this.desc = desc
            this.date = date
        }
        run() {
            console.log(`Name:${this.name}, Description:${this.desc}, Date:${this.date}`)
        }
    }
    let getInfo = new Info(name, descr, date)
    let formSubmit = (e) => {
        e.preventDefault()
        $('.ghost').css({right: '10%'})
        getInfo.run()
        // alert('info sent in in CONSOLE and not in gmail cz it is Test Project')
    }
    return (
        <div className='request'>
            <center>
                <p className='req-header'>you can request any game</p>
            </center>
            <center>
                <form className='req-form' onSubmit={formSubmit}>
                    <p className='form-name'>Name Of Game</p>
                    <input
                        type='text'
                        className='req-txt'
                        required="required"
                        placeholder='type...'
                        onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    <p className='form-name'>Description</p>
                    <textarea
                        className='req-textArea'
                        required="required"
                        onChange={(e) => {
                            setDescr(e.target.value)
                        }}/>
                    <p className='form-name'>Date Of Release</p>
                    <input
                        type='date'
                        required="required"
                        className='req-date'
                        onChange={(e) => setDate(e.target.value)}/>
                    <p className='form-name'>Submit Your Request</p>
                    <input type='submit' className='req-submit' value={'Send'}/>
                </form>
            </center>
            {/* scss from request */}
            <div
                className='ghost'
                onClick={() => {
                    $('.ghost').css({right: '-100%'})
                }}>
                Sent
            </div>
        </div>
    )
}
