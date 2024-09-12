import React, { useState } from 'react';
import './navbar.css';

function NavBar({ handleGroupChange, handleSortChange }) {
  // Default options for grouping and sorting
  const [groupOption, setGroupOption] = useState('status'); // Default grouping by status
  const [sortOption, setSortOption] = useState('priority'); // Default sorting by priority
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle between open and closed
  };

  // Handle Grouping Change
  const handleGroupSelect = (e) => {
    setGroupOption(e.target.value);
    handleGroupChange(e.target.value); // Pass selected group option to App.js
  };

  // Handle Sorting Change
  const handleSortSelect = (e) => {
    setSortOption(e.target.value);
    handleSortChange(e.target.value); // Pass selected sort option to App.js
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Toggle dropdown on button click */}
        <button className="display-button" onClick={toggleDropdown}>
          <span>⚙️</span> Display
        </button>

        {/* Dropdown content visibility controlled by isDropdownOpen */}
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-section">
              <label htmlFor="grouping">Grouping:</label>
              <select
                id="grouping"
                value={groupOption}
                onChange={handleGroupSelect}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-section">
              <label htmlFor="ordering">Ordering:</label>
              <select
                id="ordering"
                value={sortOption}
                onChange={handleSortSelect}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
