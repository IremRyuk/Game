import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import '../styles/Nav/nav.css'
import $ from 'jquery'
export default function Nav() {
    let [miniDevice, setMiniDevice] = useState(window.innerWidth)
    let [open, setOpen] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMiniDevice(window.innerWidth)
        })
    })
    // open close mini
    let openClose = () => {
        setOpen(!open)
    }
    if (open) {
        $('#uls').css({display: 'block'})
    } else {
        $('#uls').css({display: 'none'})
    }
    // open close mini
    return (
        <div className="nav">
            <div className="nav-cont">
                <div className="nav-cont-left">
                    <p className="nav-header">
                        <Link to='/'>IremRyuk</Link>
                    </p>
                </div>
                <div className="nav-cont-right">
                    <ul className="nav-ul">
                        <li>
                            <Link className="nav-links" to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className="nav-links" to='/offer'>Offer</Link>
                        </li>
                        <li>
                            <Link className="nav-links" to='/report'>Report</Link>
                        </li>
                        <li>
                            <Link className="nav-links" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <button
                    className="nav-btn"
                    onClick={() => {
                        openClose()
                    }}
                    style={{
                        outline: 'none'
                    }}><i className="fa-solid fa-bars"/></button>
            </div>
            {
                miniDevice <= 900 && <div
                        className="nav-mini"
                        style={{
                            transition: '0.4s'
                        }}>
                        <ul className="nav-ul-mini" id="uls">
                            <li>
                                <Link className="nav-links-mini" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="nav-links-mini" to='/request'>Request</Link>
                            </li>
                            <li>
                                <Link className="nav-links-mini" to='/report'>Report</Link>
                            </li>
                            <li>
                                <Link className="nav-links-mini" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
            }
        </div>
    )
}