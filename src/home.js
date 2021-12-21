import React, { useState, useRef, useLayoutEffect } from 'react'
import initBG from './assets/img/initBG.jpg'
import gabriel from './assets/img/gabriel.png'
import './css/home-page.css'
import './css/about-page.css'
import './css/portfolio-page.css'
import 'axios'
import TypeAnimation from 'react-type-animation';
import Projects from './projects'
import Skills from './skills'
import Touch from "./touch";

const Home = () => {

    const ourRef = useRef(null)

    const screensCount = 3;
    const currentYear = new Date().getFullYear();

    const [scrollState, setscrollState] = useState(0)

    useLayoutEffect(() => {
        // const topPosition = ourRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            setscrollState(scrollPosition / (screensCount * windowHeight))
            
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
        /* 
           remove the event listener in the cleanup function 
           to prevent memory leaks
        */
    }, [scrollState]);

    const aboutMainH1Style = {
        left: (scrollState * 100) - (screensCount*20) + "%"
    }

    const aboutSecondaryH1Style = {
        left: (scrollState * 70) - (screensCount*17) + "%"
    }

    const aboutPStyle = {
        left: (scrollState * 150) - (screensCount*31) + "%"
    }

    const aboutImgStyle = {
        right: (scrollState * 150) - (screensCount*31) + "%"
    }

    const portfolioPageStyle={
        background: "linear-gradient(180deg, rgb(56,56,56) 0%, #2d2d2d 100%)",
        opacity: (scrollState*Math.sqrt(scrollState))
    }

    return (
        <div className="page-wrapper" ref={ourRef}>
            <div className='initial-screen-wrap'>
                <div className="initial-screen-black-filter"></div>
                <img className='initial-screen-bg' alt="Bedroom with laptop" src={initBG}></img>
                <div className='initial-screen'>
                    <h1>Gabriel Tomonari</h1>
                    <TypeAnimation
                        cursor={true}
                        sequence={['Web and Mobile Developer based in Brazil', 1000]}
                        repeat={1}
                        wrapper="h2"
                        
                    />
                </div>
            </div>
            <div className="about-page-wrapper">
                <div className="about-page">
                    <img style={aboutImgStyle} src={gabriel} alt="" />
                    <h1 className="main-h1" style={aboutMainH1Style}>About me</h1>
                    
                    <h1 className="secondary-h1" style={aboutSecondaryH1Style}>About me</h1>
                    <p style={aboutPStyle}>Gabriel is a mobile and web developer with <mark>{currentYear - 2014}+ years</mark> of experience in applications for small businesses and entrepreneurs.
                        He enjoys challenges and problem solving, and he's a quick learner when working with something new.
                        He excels with <mark>Flutter and Firebase</mark> and is currently getting up to speed with <mark>React.JS</mark>.</p>
                </div>
            </div>
            <div className="portfolio-page-wrapper wrapper"  style={portfolioPageStyle}>
                <div className="portfolio-page">
                <h1>Portfolio</h1>
                <h2>Main projects</h2>
                <Projects/>
                </div>
            </div>
            <Skills scrollPosition={scrollState}/>
            <Touch/>
        </div>
    )

}

export default Home
