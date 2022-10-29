import React from "react";
import CharacterData from "./api"

function SearchBar({ setCharacters }) {
    const handleFilter = (option) => {
        const filtered = CharacterData;

        switch (option) {
            case "Marvel":
            
                break;
            case "MCU Heroes":
        
                break;
            case "MCU Villains":
    
                break;
            case "DC":
    
                break;
            case "DCEU Heroes":
    
                break;
            case "DCEU Villains":

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
            <option value="DC">DC Comics</option>
            <option value="DCEU Heroes">DCEU: superheroes</option>
            <option value="DCEU Villains">DCEU: villains</option>
        </select>
        <input type="text" placeholder="Search" value="" className="search"></input>
        </div>
    );
}

export default SearchBar;
