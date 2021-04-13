import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "aos/dist/aos.css";
import Aos from "aos";
import {useEffect} from "react";

const Contacts = () => {

    useEffect(() => {
        Aos.init({duration:500});
     
    }, []);  

    return (
        
        <div id="contacts" className="contacts" >
                <div className="text-center">
                    <h1 data-aos="fade-up">Contact me</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xm-12">
                            {/***Name**/}
                        <FaPhone data-aos="flip-left" size="3rem" /><p style={{color:"darkslategrey"}}>+353-894960293</p>
                            
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-xm-12">
                                {/***Name**/}
                            
                            <MdEmail size="3rem"/><p style={{color:"darkslategrey"}}>ritz0505@gmail.com</p>

                                
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        
    )
}

export default Contacts
