import './App.css';
import "./assets/themes.css";
import React, { useState, useRef } from 'react';
import Header from './components/Header/Header.js';
import Project from './pages/project/Project';
import RU from './constants/RU';
import Myinfo from './components/MyInfo/Myinfo';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import EN from './constants/EN';

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const acceptLanguage = navigator.language || navigator.userLanguage;

  const [activeLanguage, setActiveLanguage] = useState(acceptLanguage === "ru-RU" ? RU: EN);

  const scrollToElement = (myRefName) => {
    if (myRefName === "about") {
      about.current.scrollIntoView({ behavior: 'smooth' });
    } else if (myRefName === "projects") {
      projects.current.scrollIntoView({ behavior: 'smooth' });
    } else if (myRefName === "contacts") {
      contacts.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  document.documentElement.setAttribute('data-theme', "dark");//for start with dark theme
  return (
    <div className="App">
      <Header setActiveLanguage={setActiveLanguage} activeLanguage={activeLanguage} scrollToElement={scrollToElement} />
      <p className='myRef' ref={about}></p>
      <Myinfo activeLanguage={activeLanguage} />
      <Education activeLanguage={activeLanguage} />
      <Skills activeLanguage={activeLanguage} />
      <p className='myRef' ref={projects}></p>
      <Project activeLanguage={activeLanguage} />
      <p className='myRef' ref={contacts}></p>
      <Contacts activeLanguage={activeLanguage} />
    </div>
  );
}

export default App;