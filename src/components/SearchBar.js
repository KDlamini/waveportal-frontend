import React from "react";
import CharacterData from "./api"

function SearchBar({ setCharacters }) {
    const handleFilter = (option) => {
        const characters = CharacterData;
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
        <input type="text" placeholder="Search" value="" className="search"></input>
        </div>
    );
}

export default SearchBar;
