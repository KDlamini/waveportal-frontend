import React, { useState } from "react";
import CharacterData from "./api"

function SearchBar({ setCharacters }) {
    const [ search, setSearch ] = useState('');
    const characters = CharacterData;

    const handleFilter = (option) => {
        let filtered = [];

        switch (option) {
            case "All":
                filtered = characters;
                break;
            case "Marvel":
                filtered = characters.filter((character) => (character.studio === 'Marvel'));
                break;
            case "MCU Heroes":
                filtered = characters.filter((character) => (character.studio === 'Marvel' && character.type === 'superhero'));
                break;
            case "MCU Villains":
                filtered = characters.filter((character) => (character.studio === 'Marvel' && character.type === 'villain'));
                break;
            case "DC":
                filtered = characters.filter((character) => (character.studio === 'DC Comics'));
                break;
            case "DCEU Heroes":
                filtered = characters.filter((character) => (character.studio === 'DC Comics' && character.type === 'superhero'));
                break;
            case "DCEU Villains":
                filtered = characters.filter((character) => (character.studio === 'DC Comics' && character.type === 'villain'));
                break;
        
            default:
                break;
        }
        
        return filtered;
    }

    const handleSearch = (value) => {
        setSearch(value);

        const result = characters.filter((character) => {
            return (
                character.name.toLowerCase().includes(value) ||
                character.studio.toLowerCase().includes(value) ||
                character.type.toLowerCase().includes(value)
            )
        });

        setCharacters(result);
    }

    return (
        <div className="search-bar">
            <select
                className="filter-characters"
                onChange={(e) => setCharacters(handleFilter(e.target.value))}
            >
                <option value="All">All</option>
                <option value="Marvel">Marvel Studios</option>
                <option value="MCU Heroes">MCU: superheroes</option>
                <option value="MCU Villains">MCU: villains</option>
                <option value="DC">DC Universe</option>
                <option value="DCEU Heroes">DCEU: superheroes</option>
                <option value="DCEU Villains">DCEU: villains</option>
            </select>

            <input
                type="text"
                placeholder="Search"
                value={search}
                className="search"
                onChange={(e) => handleSearch(e.target.value)}
            >
            </input>
        </div>
    );
}

export default SearchBar;
