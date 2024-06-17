import React from "react";
import Icon from "./Icon";
import profile from '../Images/profile.png'
import experience from '../Images/experience.png'
import education from '../Images/education.png'
import skills from '../Images/skill.png'
import projects from '../Images/projects.png'
import certificates from '../Images/certificate.png'
import hobbies from '../Images/hobbies.png'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={props.visible}>
      <Link to='/about' >     
        <div className="navItem">
          <Icon iconImg={profile} iconAlt="Extra curricular" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>About</p> */}
        </div> 
      </Link>

      <Link to='/experience'>
        <div className="navItem">
          <Icon iconImg={experience} iconAlt="Experience" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>Experience</p> */}
        </div>
      </Link>
        
      <Link to='/education'> 
        <div className="navItem">
          <Icon iconImg={education} iconAlt="Education" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>Education</p> */}
        </div>     
      </Link>

      <Link to='/skills'>      
        <div className="navItem">
          <Icon iconImg={skills} iconAlt="Skills" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>Skills</p> */}
        </div>
      </Link>

      <Link to='/projects'> 
        <div className="navItem">
          <Icon iconImg={projects} iconAlt="Projects" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>Projects</p> */}
        </div>     
      </Link>

      <Link to='/'>    
        <div className="navItem">
          <Icon iconImg={certificates} iconAlt="Certificates" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>Certificates</p> */}
        </div>  
      </Link>

      <Link to='/extracurricular'>     
        <div className="navItem">
          <Icon iconImg={certificates} iconAlt="ExtraCurricular" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>ExtraCurricular</p> */}
        </div> 
      </Link>
     
      <Link to='/hobbies'>     
        <div className="navItem">
          <Icon iconImg={hobbies} iconAlt="Hobbies" className="navbarIcon"></Icon>
          {/* <p style={{fontSize:'12px',color:'black',textDecoration:'none'}}>Hobbies</p> */}
        </div> 
      </Link>
      
    </nav>
  );
}
