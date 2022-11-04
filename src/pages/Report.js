import React, {useState} from "react";
import '../styles/Report/report.css'
import $ from 'jquery'

export default function Report() {
    let [text, setText] = useState('')
    let reportInfo = {
        text
    }
    let reportForm = (e) => {
        e.preventDefault()
        $('.ghost').css({right: '10%'})
        alert('info in CONSOLE cz this is Test Project')
        console.log(reportInfo)
    }
    return (
        <center>
            <div className="report">
                <center>
                    <div>
                        <p className="rep-text">if u have some problem in our web-page please text us</p>
                    </div>
                </center>
                <center>
                    <form className="rep-form" onSubmit={reportForm}>
                        <textarea
                            className="rep-textArea"
                            placeholder="type..."
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
                            required="required"/>
                        <p></p>
                        <input type='submit' className="rep-sub"/>
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
        </center>

    )
}