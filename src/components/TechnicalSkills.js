import React from "react";
import { SiEclipseide,SiIntellijidea,SiJinja,SiOracle,SiJira } from "react-icons/si";
import { DiVisualstudio,DiGithubBadge,DiCss3,DiJava,DiJavascript1,DiPython,DiReact,DiBootstrap,DiMysql,DiGoogleCloudPlatform } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";



/*import { faWindows,faLinux } from "@fortawesome/free-brands-svg-icons";/*****operating system*******/

const TechnicalSkills = () => {

    useEffect(() => {
        Aos.init({duration:500});
     
    }, []);  

    return (
        <div className="check">
        <div id="TechnicalSkills" className="container py-5">
        <h2 data-aos="fade-up" className="skillsHeading" style={{color:"orange"}}>Technical Skills</h2>
            {/**********************tools********************/}
           <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="skill-wrap">
                    <h5 data-aos="flip-left">Tools</h5>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-sm-12"> 
                    <SiEclipseide size="2rem"/>
                    <DiVisualstudio size="2rem"/>
                    <SiIntellijidea size="2rem"/>
                    <DiGithubBadge size="2rem"/>
                    <SiJira size="2rem"/>
                </div>
                
            </div> 
            <div></div>
            <br/>
            

            {/**********************languages********************/}
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="skill-wrap">
                    <h5 data-aos="flip-left">Programming Languages</h5>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-sm-12"> 
                    <AiFillHtml5 size="2rem"/>
                    <DiCss3 size="2rem"/>
                    <DiJava size="2rem"/>
                    <DiJavascript1 size="2rem"/>
                    <DiPython size="2rem" />
                </div>
            </div>
            <br/>
            

            {/**********************framework********************/}
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="skill-wrap">
                    <h5 data-aos="flip-left">Framework</h5>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-sm-12"> 
                    <DiReact size="2rem"/>
                    <DiBootstrap size="2rem"/>
                    <SiJinja size="2rem"/>
                </div>
            </div>
            <br/>
            

            {/**********************Database********************/}
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="skill-wrap">
                    <h5 data-aos="flip-left">Database</h5>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-sm-12"> 
                    <DiMysql size="2rem" />
                    <SiOracle size="2rem"/>
                </div>
            </div>
            <br/>
            

            {/**********************cloud********************/}
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="skill-wrap">
                    <h5 data-aos="flip-left">Cloud</h5>
                    </div>
                </div>
                
                <div  data-aos="zoom-out-down" className="col-lg-6 col-sm-12"> 
                    <DiGoogleCloudPlatform size="2rem"/>
                </div>
            </div>
            <br/>
        
        </div>
        </div>
    )
}

export default TechnicalSkills

