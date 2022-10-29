import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <select
        className="filter-characters"
        // onChange={(e) => setProducts(handleSort(e.target.value, data))}
      >
        <option value="Marvel">All</option>
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
