import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaDownload } from "react-icons/fa";
import './About.css';
import resume from '../../assets/files/cv_Aracely_Saenz.pdf';

const About = ({ currentLanguage }) => {
    return (
        <section id='about'>
            <h3>About me</h3>
            <a
                href={resume}
                download="cv_Aracely_Saenz.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="none" className='btn-download'> <FaDownload />  Download my resume</Button>
            </a>
        </section>
    );
};

export default About;
