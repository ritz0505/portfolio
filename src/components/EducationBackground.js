import React from "react";
import collegeLogo1 from "../griffith-title-logo.webp";
import collegeLogo2 from "../graphicera.png";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";


function EducationBackground() {

    useEffect(() => {
        Aos.init({duration:500});
     
    }, []);  

    return (
        <div className="check">
        <div id="EducationBackground" className="container py-5">
        <h2 data-aos="fade-up" className="heading">Educational Background</h2>
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div data-aos="flip-left" className="photo-wrap1">
                    <img  className="clg1-img" src={collegeLogo1} alt="Masters College"></img>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-xm-12"> 
                    <h5 className="clgName1">Griffith College Dublin, Ireland</h5>
                    <p className="insideclgname">Masters of Science in Computing</p>
                    <p className="insideclgname">2019-20</p>
                </div>
            </div> 
            
            
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div data-aos="flip-left" className="photo-wrap2">
                    <img className="clg2-img" src={collegeLogo2} alt="Bachelors College"></img>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-xm-12"> 
                    <h5 className="clgName1">Graphic Era University,Dehradun, India</h5>
                    <p className="insideclgname">Bachelors of Technology in Information Technology</p>
                    <p className="insideclgname">2011-15</p>
                </div>
            </div> 
        </div>
        </div>  

    )
}

export default EducationBackground
