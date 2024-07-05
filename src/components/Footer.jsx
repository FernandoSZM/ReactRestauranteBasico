// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Importamos los estilos CSS del footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Contenido del footer, por ejemplo: */}
                <p>&copy; 2024 Proyecto Menu - Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;
