import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaInstagram} from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import './NavBar.css';
import information from '../../assets/lenguage/information';

const NavBar = ({onLanguagechange, currentLanguage}) => {
  const {nav} = information[currentLanguage];
  
  return (
    <Navbar expand="lg" className="navbar-dark">
    <Container>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">{nav.home}</Nav.Link>
          <Nav.Link href="#about">{nav.about}</Nav.Link>
          <Nav.Link href="#resume">{nav.resume}</Nav.Link>
          <Nav.Link href="#resume">{nav.skills}</Nav.Link>
          <Nav.Link href="#projects">{nav.projects}</Nav.Link>
          <Nav.Link href="#contact">{nav.contact}</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/saenz-contreras/" className="social-icon"><AiOutlineLinkedin size={30} /></Nav.Link>
          <Nav.Link href="https://github.com/AracelySC" className="social-icon"><IoLogoGithub size={30} /></Nav.Link>
          <Nav.Link href="https://www.instagram.com/arascontreras/" className="social-icon"><FaInstagram size={30}/></Nav.Link>        
          <Nav.Link href="#"><span className='lenguageButton' onClick={onLanguagechange}>{currentLanguage}</span></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
