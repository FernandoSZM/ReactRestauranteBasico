// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <p>Nos encantaría saber de ti. Puedes contactarnos a través de los siguientes medios:</p>
            <div className="contact-info">
                <p><strong>Teléfono:</strong> +34 123 456 789</p>
                <p><strong>Email:</strong> info@allrecipes.com</p>
                <p><strong>Dirección:</strong> Calle de la Cocina 123, Madrid, España</p>
            </div>
            <p>O síguenos en nuestras redes sociales:</p>
            <div className="social-media">
                <p><strong>Facebook:</strong> facebook.com/allrecipes</p>
                <p><strong>Instagram:</strong> instagram.com/allrecipes</p>
                <p><strong>Twitter:</strong> twitter.com/allrecipes</p>
            </div>
        </div>
    );
}

export default Contact;
