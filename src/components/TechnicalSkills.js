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
        <h2 data-aos="fade-up" className="skillsHeading" style={{color:"midnightblue"}}>Technical Skills</h2>
            {/**********************tools********************/}
           <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="skill-wrap">
                    <h5 data-aos="flip-left">Tools</h5>
                    </div>
                </div>
                
                <div data-aos="zoom-out-down" className="col-lg-6 col-sm-12"> 
                    <SiEclipseide size="3rem"/>
                    <DiVisualstudio size="3rem"/>
                    <SiIntellijidea size="3rem"/>
                    <DiGithubBadge size="3rem"/>
                    <SiJira size="3rem"/>
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
                    <AiFillHtml5 size="3rem"/>
                    <DiCss3 size="3rem"/>
                    <DiJava size="3rem"/>
                    <DiJavascript1 size="3rem"/>
                    <DiPython size="3rem" />
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
                    <DiReact size="3rem"/>
                    <DiBootstrap size="3rem"/>
                    <SiJinja size="3rem"/>
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
                    <DiMysql size="3rem" />
                    <SiOracle size="3rem"/>
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
                    <DiGoogleCloudPlatform size="3rem"/>
                </div>
            </div>
            <br/>
        
        </div>
        </div>
    )
}

export default TechnicalSkills

