import React, { useState } from 'react';
import './navbar.css';

function NavBar({ handleGroupChange, handleSortChange }) {
  const [groupOption, setGroupOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [isDisplayDropdownOpen, setIsDisplayDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const toggleDisplayDropdown = () => {
    setIsDisplayDropdownOpen(!isDisplayDropdownOpen);
    setIsFilterDropdownOpen(false); // Close filter dropdown if open
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
    setIsDisplayDropdownOpen(false); // Close display dropdown if open
  };

  const handleGroupSelect = (e) => {
    setGroupOption(e.target.value);
    handleGroupChange(e.target.value);
  };

  const handleSortSelect = (e) => {
    setSortOption(e.target.value);
    handleSortChange(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="navbar-button" onClick={toggleDisplayDropdown}>
          <span>⚙️</span> Display
        </button>
        <button className="navbar-button" onClick={toggleFilterDropdown}>
          <span>🔍</span> Filter by Name
        </button>

        {isDisplayDropdownOpen && (
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
        )}

        {isFilterDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-section">
              <label htmlFor="filter">Filter:</label>
              <input type="text" id="filter" placeholder="Enter filter criteria" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;