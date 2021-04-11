
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Headers";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import EducationalBackground from "./components/EducationBackground";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Particles 
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"square",
            stroke:{
              width: 3,
              color: 'yellow'
            }
          }
        }
     
      }}/>
      <Navbar />
      <Header />
      <AboutMe />
      <EducationalBackground />
      <TechnicalSkills />
      <Experience />
    </>
  );
}

export default App;
