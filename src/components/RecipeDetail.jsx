// src/components/RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetail.css';

const RecipeDetail = ({ recipes }) => {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.idMeal === id);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="recipe-detail-container">
            <h2 className="recipe-title">{recipe.strMeal}</h2>
            <div className="recipe-detail-horizontal">
                <div className="recipe-image">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
                <div className="recipe-info">
                    <div className="recipe-ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            {Array.from({ length: 20 }, (_, i) => i + 1).map(i => (
                                recipe[`strIngredient${i}`] && (
                                    <li key={i}>
                                        {recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                    <div className="recipe-instructions">
                        <h3>Instructions</h3>
                        <p>{recipe.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
