import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import information from '../../assets/lenguage/information';
import './Resume.css';


const Resume = ({ currentLanguage }) => {
    const { resume } = information[currentLanguage];

    return (

        <Row class="resume" id='resume'>
            <Row>
                <Col className="resume-title">
                    <h3>
                        <span>{resume.title1}</span>
                    </h3>
                </Col>
                <Col className="resume-info">
                    {
                        resume.education.map((education) => (
                            <div className="item-info" key={education.institution}>
                                <h5>{education.institution}</h5>
                                <p className="info">
                                    {education.degree} <span>&bull;</span>
                                    <em className="date"> {education.date}</em>
                                </p>
                            </div>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col className="resume-title">
                    <h3>
                        <span>{resume.title2}</span>
                    </h3>
                </Col>
                <Col className="resume-info">
                    {
                        resume.experience.map((experience) => (
                            <div className="item-info" key={experience.company}>
                                <h5>{experience.company}</h5>
                                <p className="info">
                                    {experience.position} <span>&bull;</span>
                                    <em className="date"> {experience.date}</em>
                                </p>
                                <p>{experience.description}</p>
                            </div>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col className="resume-title">
                    <h3>
                        <span>{resume.title3}</span>
                    </h3>
                </Col>
                <Col>
                </Col>
            </Row>

        </Row>
    );
};

export default Resume;
