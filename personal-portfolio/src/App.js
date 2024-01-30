import { useState } from 'react';
import './App.css';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.js'
import Resume from './components/Resume/Resume.jsx';
import gsap from "gsap";
function App() {
  const [lenguage, setLenguaje] = useState('ES');

  window.addEventListener("mousemove", (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);
    gsap.to(".portfolio-copy", {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.4,
      ease: "sine.out"
    });
  });

  const handleLanguageChange = () => {
    setLenguaje(lenguage === 'ES' ? 'EN' : 'ES');
  }
  return (
    <div className="App">
      <div className='portfolio'>
        <NavBar onLanguagechange={handleLanguageChange} currentLanguage={lenguage} />
        <Home  currentLanguage={lenguage}/>
        <About />
        <Resume />
        <Contact />
      </div>
      <div id='portfolio-copy' className='portfolio-copy' aria-hidden="true">
        <NavBar onLanguagechange={handleLanguageChange} currentLanguage={lenguage} />
        <Home  currentLanguage={lenguage}/>
        <About />
        <Resume />
        <Contact />
      </div> 

    </div>
  );
}

export default App;
