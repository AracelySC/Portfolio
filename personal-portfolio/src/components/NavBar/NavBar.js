import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import './NavBar.css';
import information from '../../assets/lenguage/information';

const NavBar = ({ onLanguagechange, currentLanguage }) => {
  const { nav } = information[currentLanguage];

  return (
    <Navbar expand="lg" className="navbar-dark" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
        >
          <Offcanvas.Header closeButton className='custom-offcanvas-header'/>         
          <Offcanvas.Body className='navbar-dark'>
            <Nav className="mx-auto">
              <Nav.Link href="#home">{nav.home}</Nav.Link>
              <Nav.Link href="#about">{nav.about}</Nav.Link>
              <Nav.Link href="#resume">{nav.resume}</Nav.Link>
              <Nav.Link href="#projects">{nav.projects}</Nav.Link>
              <Nav.Link href="#contact">{nav.contact}</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/saenz-contreras/" target="_blank" className="social-icon"><AiOutlineLinkedin size={30} /></Nav.Link>
              <Nav.Link href="https://github.com/AracelySC" target="_blank" className="social-icon"><IoLogoGithub size={30} /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/arascontreras/" target="_blank" className="social-icon"><FaInstagram size={30} /></Nav.Link>
              <Nav.Link href="#"><span onClick={onLanguagechange}>{currentLanguage}</span></Nav.Link>

            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
