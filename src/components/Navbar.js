import React from "react";
import logo from "../logo.jpg";
//React font awsome------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark secondary-color fixed-top">
        <div className="container alignment">
        {/*<a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.."/></a>*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color : "white"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="AboutMe" offset={-110} className="nav-link" href="#">About Me</Link>
            </li> 
            <li className="nav-item">
            <Link smooth={true} to="EducationBackground" offset={-110} className="nav-link" href="#">Education Background</Link>
            </li> 
            <li className="nav-item">
            <Link smooth={true} to="TechnicalSkills" offset={-110} className="nav-link" href="#">Technical Skills</Link>
            </li> 
            <li className="nav-item">
            <Link smooth={true} to="Experience" offset={-110} className="nav-link" href="#">Experience</Link>
            </li> 
            <li className="nav-item">
            <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contact</Link>
            </li> 
          </ul> 
        </div>

        </div>
      </nav>
    )
}

export default Navbar

