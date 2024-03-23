import React from 'react';
import information from '../../assets/lenguage/information';


const Contact = ({ currentLanguage }) => {
    const { contact } = information[currentLanguage];
    return (
        <section id='contact'>
            <h2>{contact.title}</h2>
            <p>{contact.email}</p>
            <p>{contact.phoneNumber}</p>
            <p>{contact.address}</p>
            
        </section>
    );
};

export default Contact;
