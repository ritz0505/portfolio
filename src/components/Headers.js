import React from 'react';
import Typed from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Headers() {
    return (
        <div id="home" className="Header-wraper">
            <div className="mainInfo">
                <h1>Ritika Joshi</h1>
                <Typed 
                className="typed-text"
                strings={["Experienced Senior System Engineer","Front-End Developer","Web Developer", "UI Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <br></br>

                <div className="Iconset">
                    <a target="_blank" style={{color:'cyan'}} href="https://www.linkedin.com/in/ritika-joshi-4400aa23/" > <FaLinkedin  className="linkedin"  size="3rem"/> </a>
                    <a target="_blank" style={{color:'cyan'}} href="https://github.com/ritz0505">  <FaGithubSquare  className="github" size="3rem" /> </a>
                </div>
                
            </div>

           
        </div>

    )
}

export default Headers
