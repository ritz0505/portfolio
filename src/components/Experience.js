import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";

const Experience = () => {

    useEffect(() => {
        Aos.init({duration:500});
     
    }, []);  

    return (
        <div className="check">
        <div id="Experience" className="experience">
            <div className=".d-flex justify-content-center my-5">
                <h1 data-aos="fade-up" >Experience</h1>
            </div>

            <div data-aos="flip-left" className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h4 className="timelineheading">2019-2020</h4>
                            <p data-aos="zoom-out-down" >Master Of Sciences in Computing</p>
                            <p>Modules:</p>
                            <p data-aos="zoom-out-down" >
                            - Agile Software Development - Computer Networks and Internet Working
                            - Mobile development - Cloud platform applications - Information Security
                            - Information Retrieval and web search - Research Methods - Parallel and Distributed Programming
                            </p><p data-aos="zoom-out-down" >
                            Thesis: Android application to enhance the security mechanism on the applications and to prevent shoulder surfing
                            -Designed an android application which will provide the two-layer of authentication on any application using a graphical representation of passwords and the OTP system which will help to avoid the shoulder surfing.
                            </p>
                        </div>
                    
                </div>

                {/*******/}

                <div data-aos="flip-right" className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h4 className="timelineheading">2015-2019</h4>
                            <p data-aos="zoom-out-down" >Senior System Engineer - Infosys Limited</p>
                            <p data-aos="zoom-out-down" >Project - Code Customisation in Finacle</p>
                            <p data-aos="zoom-out-down" >Clients -</p>
                            <p data-aos="zoom-out-down" >- Kotak Mahindra Bank</p>
                            <p data-aos="zoom-out-down" >- Export-Import Bank of India</p>
                            <p data-aos="zoom-out-down" >- Punjab National Bank of India</p>
                            <p data-aos="zoom-out-down" >Responsibilities-</p>
                            <p data-aos="zoom-out-down" >-Proficient in handling product customizable requirements(Defects & Implementation).
                            Worked as a SPOC. Developed custom menus for banking software(Finacle). Implemented JSP pages with javascript as client validations.
                            Implemented scripts in the Live Environment. Experienced in handling and resolving live server issues.
                            Proficient in On-time delivery of customization. Worked on the Asset classification module of the bank(PA/NPA)</p>
                            
                            
                        </div>
                    
                </div>

                {/************/}

                <div data-aos="flip-left" className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h4 className="timelineheading">2011-2015</h4>
                            <p data-aos="zoom-out-down" >Bachelors of Technology in Information Technology</p>
                            <p>Modules:</p>
                            <p data-aos="zoom-out-down" >
                            -Distributed systems- Infrastructure Management- Business Intelligence
                            -Mobile Computing- Computer networks- Cryptography - Mobile applications development
                            -Compiler design - Software Engineering - Web programming - Java Programming
                            -Software project management - Database management - Design and analysis of algorithm - operating systems
                            -Computer Organizations - Finite Automata - Object-oriented programming in C++
                            -Logic Design - Data structures - Unix & Shell programming

                            </p><p data-aos="zoom-out-down" >
                            Final Year Project : Designed an android application about the Uttrakhand tourism which will tell about the places
                             to visit in the state and also show the route map to reach to the destination.
                            </p>
                        </div>
                    
                </div>

            </div>
            
        </div>
        </div>
    )
}

export default Experience
