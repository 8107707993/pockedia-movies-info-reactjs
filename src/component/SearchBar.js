import React from "react";
import "./Navbar.css";

function SearchBar() {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
        />
        <a href="/" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>
    </>
  );
}

export default SearchBar;
