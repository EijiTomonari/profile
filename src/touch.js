import React from 'react'
import './css/touch-page.css'
import TypeAnimation from 'react-type-animation';
import { Parallax } from 'react-parallax';
import linkedin from './assets/img/linkedin.png'
import github from './assets/img/github.png'
import email from './assets/img/email.png'
import office from './assets/img/office.jpg'

export default function Touch() {
    return (
        <div className='touch-wrapper wrapper'>
            <div className="contact-info-border">
                <Parallax blur={7} bgImage={office} bgImageAlt="Office" strength={500} style={{height:'100%',backgroundSize:'cover'}}>
                </Parallax>
            </div>
            <div className="contact-info">
                <h1>Get in <span>touch</span></h1>
                <hr />
                <ul>
                    <li><a href="mailto:gabriel@tomonari.dev"><img src={email} alt="Send me an email" width={"30px"} /></a></li>
                    <li><a href="https://www.linkedin.com/in/gabrieltomonari/"><img src={linkedin} alt="View LinkedIn profile" width={"30px"} /></a></li>
                    <li><a href="https://github.com/GabrielTomonari"><img src={github} alt="View GitHub profile" width={"30px"} /></a></li>
                </ul>
            </div>
        </div>
    )
}
