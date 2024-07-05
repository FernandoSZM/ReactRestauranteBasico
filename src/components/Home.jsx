import React from 'react';
import './Home.css';
import BarraFavoritos from './BarraFavoritos';
import BoxDelPlatillo from './BoxDelPlatillo';

function Home({ recipes, favorites, toggleFavorite }) {
    return (
        <div>
            <BarraFavoritos favorites={favorites} />
            <div className="cuerpo">
                {recipes.map(recipe => (
                    <BoxDelPlatillo
                        key={recipe.idMeal}
                        recipe={recipe}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
