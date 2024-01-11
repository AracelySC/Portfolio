import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaInstagram,FaLanguage } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import './NavBar.css';
import information from '../../assets/lenguage/information'
const NavBar = ({onLanguagechange, currentLanguage}) => {
  const nav = information[currentLanguage];
  const language=[
    {label: 'Spanish', value: 'es'},
    {label: 'English', value: 'en'}
  ];
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
    <Container>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/saenz-contreras/" className="social-icon"><AiOutlineLinkedin size={30} /></Nav.Link>
          <Nav.Link href="https://github.com/AracelySC" className="social-icon"><IoLogoGithub size={30} /></Nav.Link>
          <Nav.Link href="https://www.instagram.com/arascontreras/" className="social-icon"><FaInstagram size={30}/></Nav.Link>
          <Nav.Link href="#language" className="social-icon"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
