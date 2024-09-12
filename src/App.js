import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Body from './Components/Body/Body';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');  // Default grouping by status
  const [sortBy, setSortBy] = useState('priority');  // Default sorting by priority

  // Fetch tickets from the API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets); // Set fetched tickets
      })
      .catch((error) => {
        console.error("Error fetching the tickets:", error);
      });
  }, []); // Empty dependency array to fetch data once when the component mounts

  // Handlers for grouping and sorting changes
  const handleGroupChange = (selectedGroup) => {
    setGroupBy(selectedGroup);
  };

  const handleSortChange = (selectedSort) => {
    setSortBy(selectedSort);
  };

  return (
    <div className="App">
      <NavBar handleGroupChange={handleGroupChange} handleSortChange={handleSortChange} />
      <Body tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;



