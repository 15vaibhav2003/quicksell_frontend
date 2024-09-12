import React, { useState } from 'react';
import './navbar.css';

function NavBar({ handleGroupChange, handleSortChange }) {
  // States for dropdown values
  const [groupOption, setGroupOption] = useState('status'); // Default grouping by status
  const [sortOption, setSortOption] = useState('priority'); // Default sorting by priority
  
  // Handling Grouping Change
  const handleGroupSelect = (e) => {
    setGroupOption(e.target.value);
    handleGroupChange(e.target.value); // Pass selected group option to App.js
  };

  // Handling Sorting Change
  const handleSortSelect = (e) => {
    setSortOption(e.target.value);
    handleSortChange(e.target.value); // Pass selected sort option to App.js
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="display-button">Display ▼</button>
        <div className="dropdown-content">
          <div className="dropdown-section">
            <label htmlFor="grouping">Grouping:</label>
            <select id="grouping" value={groupOption} onChange={handleGroupSelect}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-section">
            <label htmlFor="ordering">Ordering:</label>
            <select id="ordering" value={sortOption} onChange={handleSortSelect}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
