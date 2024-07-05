// src/components/BoxDelPlatillo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BoxDelPlatillo.css';

const BoxDelPlatillo = ({ recipe, toggleFavorite }) => {
    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(recipe.idMeal);
    };

    return (
        <div className="boxDelPlatillo">
            <Link to={`/recipe/${recipe.idMeal}`} className="box-link">
                <div className="Contenedorimagen">
                    <img src={recipe.strMealThumb} className="imagen" alt={recipe.strMeal} />
                </div>
                <div className="infoPlatillo">
                    <div className="nombrePlatillo">{recipe.strMeal}</div>
                </div>
            </Link>
            <div className="favorite-button" onClick={handleFavoriteClick}>
                <button className={`fav-button ${recipe.isFavorite ? 'active' : ''}`}>
                    {recipe.isFavorite ? '❤' : '♡'}
                </button>
            </div>
        </div>
    );
};

export default BoxDelPlatillo;
