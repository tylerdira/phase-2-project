import React from "react";
import './SearchBar.css';

function SearchBar({ search, onSearchChange }) {
    return (
        <div className="search-bar">
            <input className="search-bar-input"
                value={search}
                type="text"
                id="search"
                placeholder="Search by caption or date"
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;