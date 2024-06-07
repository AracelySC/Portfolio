import React from 'react';
import './Home.css';
import information from '../../assets/lenguage/information';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import photo from '../../assets/img/logo.jpg';

const Home = ({ currentLanguage }) => {
    const { home } = information[currentLanguage];

    return (

        <Row class="home" id='home'>
            <Col className="home-info">
                <h1 className='mt-5'>{home.welcome}</h1>
                <h3 className='mt-5'>{home.title}</h3>
                <p>{home.subtitle}</p>
            </Col>
            <Col className="home-img">
                <Image src={photo} className='custom-img-size' roundedCircle />
            </Col>
        </Row>
     
    );
};

export default Home;
