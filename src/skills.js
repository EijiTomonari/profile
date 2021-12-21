import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './css/skills-page.css'
import { useState, useEffect } from "react";

const Skills = (props) => {
    const [widths, setWidths] = useState([])
    const randomWidths = () => {
        let maximum = 50;
        let minimun = 1;
        let number1 = Math.random() * (maximum - minimun) + minimun;
        let number2 = Math.random() * (maximum - minimun) + minimun;
        let number3 = Math.random() * (maximum - minimun) + minimun;
        let number4 = Math.random() * (maximum - minimun) + minimun;
        let array = [number1, number2, number3, number4]
        return array
    }
    useEffect(() => {
        const interval = setInterval(() => setWidths(randomWidths()), 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div className="skills-page-wrapper wrapper">
                <div className="skills-page">
                    <AnimationOnScroll animateIn="animate__backInLeft">
                        <h1>Skills</h1>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__slideInRight">
                        <div className="frameworks-skills skills-group" style={{ paddingLeft: (2 ** (props.scrollPosition * 3.2)) + "%" }}>
                            <h3>Frameworks / Libraries</h3>
                            <hr style={{ width: widths[0] + "%", backgroundColor: "hsl(" + widths[0] * 5 + ",100%,50%)" }}></hr>
                            <ul>
                                <li>React.JS</li>
                                <li>Flutter</li>
                            </ul>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__slideInRight">
                        <div className="languages-skills skills-group" style={{ paddingLeft: (2 ** (props.scrollPosition * 3.5)) + "%" }}>
                            <h3>Languages</h3>
                            <hr style={{ width: widths[1] + "%", backgroundColor: "hsl(" + widths[1] * 5 + ",100%,50%)" }}></hr>
                            <ul>
                                <li>JavaScript</li>
                                <li>Dart</li>
                                <li>Python</li>
                                <li>C++</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__slideInRight">
                        <div className="design-skills skills-group" style={{ paddingLeft: (2 ** (props.scrollPosition * 3.7)) + "%" }}>
                            <h3>Design</h3>
                            <hr style={{ width: widths[2] + "%", backgroundColor: "hsl(" + widths[2] * 5 + ",100%,50%)" }}></hr>
                            <ul>
                                <li>Figma</li>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__slideInRight">
                        <div className="embedded-skills skills-group" style={{ paddingLeft: (2 ** (props.scrollPosition * 4)) + "%" }}>
                            <h3>Embedded Systems</h3>
                            <hr style={{ width: widths[3] + "%", backgroundColor: "hsl(" + widths[3] * 5 + ",100%,50%)" }}></hr>
                            <ul>
                                <li>ESP32</li>
                                <li>ATmega/ATTiny</li>
                                <li>STM32</li>
                            </ul>
                        </div>
                    </AnimationOnScroll>
                </div>
        </div>
    )
}

export default Skills