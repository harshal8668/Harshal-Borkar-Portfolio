import './App.css';
import SideProfile from './Components/SideProfile';
import Harshal from './Images/Harshal.png'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import ExtraCurricular from './Components/Extracurricular'
import Hobbies from './Components/Hobbies'
import { useState } from 'react';

function App() {
  const [visible,setVisible]=useState('hide');
  const [activeClass,setActiveClass]=useState('profileCard');
  const [content,setContent]=useState('See More...');
  const [card,moveCard]=useState(null);
    const moveProfile=()=>{
        setActiveClass("profileCard profileCard-Left");
        setContent("Download Resume");
        setVisible('show');
        moveCard('outerContainer');
    }
  return (
    <div className={card}>
      <SideProfile profileImg={Harshal}  profileAlt="Profile Image" activeClass={activeClass} content={content} moveProfile={moveProfile}></SideProfile>
      <BrowserRouter>
        <main className={visible}>        
          <Routes>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/experience" element={<Experience/>}></Route>
            <Route exact path="/education" element={<Education/>}></Route>
            <Route exact path="/skills" element={<Skills/>}></Route>
            <Route exact path="/projects" element={<Projects/>}></Route>
            <Route exact path="/extracurricular" element={<ExtraCurricular/>}></Route>
            <Route exact path="/hobbies" element={<Hobbies/>}></Route>
            <Route exact path="/" element={<Hobbies/>}></Route>
          </Routes> 
        </main>

        <Navbar visible={visible}></Navbar>
      </BrowserRouter>

    </div>
  );
}

export default App;
