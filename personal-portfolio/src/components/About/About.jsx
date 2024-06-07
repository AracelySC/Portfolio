import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaDownload } from "react-icons/fa";
import './About.css';
import resume from '../../assets/files/cv_Aracely_Saenz.pdf';
import information from '../../assets/lenguage/information';


const About = ({ currentLanguage }) => {
    const { about } = information[currentLanguage];
    return (
        <section className='about' id='about'>
            <h3>{about.title}</h3>
            <p>
                {about.description}
            </p>
            <a
                href={resume}
                download="cv_Aracely_Saenz.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button class="btn-download"> <FaDownload />  { about.button}</button>
            </a>
        </section>
    );
};

export default About;
