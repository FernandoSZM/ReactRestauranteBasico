import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './BarraFavoritos.css';

const BarraFavoritos = ({ favorites }) => {
    const navigate = useNavigate();
    const barraRef = useRef(null);

    const handleFavoriteClick = (idMeal) => {
        navigate(`/recipe/${idMeal}`);
    };

    // Variables to handle dragging
    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
        isDown = true;
        barraRef.current.classList.add('active');
        startX = e.pageX - barraRef.current.offsetLeft;
        scrollLeft = barraRef.current.scrollLeft;
    };

    const stopDragging = () => {
        isDown = false;
        barraRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - barraRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Velocidad de desplazamiento
        barraRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="barra-favoritos"
            ref={barraRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={handleMouseMove}
        >
            {favorites.length === 0 ? (
                <div className="no-favorites-message">No hay platos favoritos</div>
            ) : (
                favorites.map((fav) => (
                    <div
                        key={fav.idMeal}
                        className="favorito"
                        onClick={() => handleFavoriteClick(fav.idMeal)}
                    >
                        <img src={fav.strMealThumb} className="favorito-imagen" alt={fav.strMeal} />
                        <div className="favorito-nombre">{fav.strMeal}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default BarraFavoritos;
