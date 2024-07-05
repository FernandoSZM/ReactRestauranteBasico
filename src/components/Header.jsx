import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ recipes, onSearch }) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchOptions, setSearchOptions] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        setSearchTerm('');
        setSearchOptions([]);
    };

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        
        if (!term) {
            setSearchOptions([]);
            onSearch(recipes);
            return;
        }

        const filteredOptions = recipes.filter(recipe =>
            recipe.strMeal.toLowerCase().includes(term.toLowerCase())
        );
        setSearchOptions(filteredOptions);
        onSearch(filteredOptions);
    };

    const handleOptionClick = (option) => {
        setSearchTerm(option.strMeal);
        onSearch([option]);
        setSearchOptions([]);
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="header">
            <h1 className="nav__title">allrecipes</h1>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/">Home</Link></li>
                    <li className="nav__item"><Link to="/about">About</Link></li>
                    <li className="nav__item"><Link to="/contact">Contact</Link></li>
                </ul>
                <img
                    src="/assets/menu.png"
                    className="menu-icon"
                    alt="Menu"
                    onClick={handleMenuClick}
                />
                <div className={`nav__menu-dropdown ${showMenu ? 'active' : ''}`}>
                    <div className="nav__menu-item"><Link to="/" onClick={handleMenuClick}>Home</Link></div>
                    <div className="nav__menu-item"><Link to="/about" onClick={handleMenuClick}>About</Link></div>
                    <div className="nav__menu-item"><Link to="/contact" onClick={handleMenuClick}>Contact</Link></div>
                </div>
            </nav>
            <div className="nav__buscar-container">
                <a href="#buscar" className="nav__buscar" onClick={handleSearchClick}>
                    <img src="/assets/lupa.png" className="nav__icon" alt="Buscar" />
                </a>
                {showSearch && (
                    <div className="nav__search-dropdown">
                        <input
                            type="text"
                            className="nav__search-input"
                            placeholder="Buscar platillos..."
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <div className="nav__options">
                            {searchOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="nav__option"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.strMeal.length > 25 ? option.strMeal.substring(0, 25) + '...' : option.strMeal}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
