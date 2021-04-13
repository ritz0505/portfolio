import React from "react";
import author from "../Ritika.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";

function AboutMe() {

    useEffect(() => {
        Aos.init({duration:500});
     
    }, []); 

    return (
        <div className="check">
        <div data-aos="fade-up" id="AboutMe" className="container py-5">
         <div className="row">
          <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
           <img data-aos="flip-left" className="profile-img" src={author} alt="author picture"></img>
          </div>
          </div>

          <div className="col-lg-6 col-xm-12">
            <h1 data-aos="zoom-out-down" className="aboutHeading">About Me</h1>
                <p className="aboutcontent" data-aos="flip-left">A competent professional with 4 years of experience in IT Industry. A resourceful and detail-oriented developer with experience
                in software engineering. Developed product features to satisfy project & business criteria by utilising the software 
                development life cycle process.Experience in working with defined agile process to 
                deliver high quality code.</p>
                
                <p className="aboutcontent" data-aos="flip-left">With Background of computer software & databases , can work productively in the fast-paced technical environment.</p>
          </div>
         </div>    
        </div>
        </div>
    )
}

export default AboutMe
