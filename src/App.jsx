// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer'; 

const API_URLS = [
    'https://www.themealdb.com/api/json/v1/1/search.php?f=f',
    'https://www.themealdb.com/api/json/v1/1/search.php?f=g',
];

//incluir mejoras para mostar platillos random en la pagina de inicio

function App() {
    const [recipes, setRecipes] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Cargar recetas
        Promise.all(API_URLS.map(url => fetch(url).then(response => response.json())))
            .then(results => {
                const allMeals = results
                    .filter(result => result.meals)
                    .flatMap(result => result.meals);
                
                // Cargar favoritos desde localStorage
                const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
                const updatedMeals = allMeals.map(meal => ({
                    ...meal,
                    isFavorite: storedFavorites.some(fav => fav.idMeal === meal.idMeal),
                }));
                setRecipes(updatedMeals);
                setSearchResults(updatedMeals);
                setFavorites(storedFavorites);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearch = (filteredRecipes) => {
        setSearchResults(filteredRecipes);
    };

    const toggleFavorite = (idMeal) => {
        const updatedRecipes = recipes.map(meal => {
            if (meal.idMeal === idMeal) {
                const updatedMeal = { ...meal, isFavorite: !meal.isFavorite };
                return updatedMeal;
            }
            return meal;
        });

        const updatedFavorites = updatedRecipes.filter(meal => meal.isFavorite);
        setRecipes(updatedRecipes);
        setSearchResults(updatedRecipes); // También actualizamos searchResults para reflejar los cambios de inmediato
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <Router>
            <div className="App">
                <Header recipes={recipes} onSearch={handleSearch} />
                <Routes>
                    <Route path="/" element={<Home recipes={searchResults} favorites={favorites} toggleFavorite={toggleFavorite} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
