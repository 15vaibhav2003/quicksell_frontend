import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Body from './Components/Body/Body';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  const handleGroupChange = (selectedGroup) => {
    setGroupBy(selectedGroup);
  };

  const handleSortChange = (selectedSort) => {
    setSortBy(selectedSort);
  };

  const handleNameFilter = (filterText) => {
    setNameFilter(filterText.toLowerCase());
  };

  const filteredTickets = tickets.filter(ticket => {
    const user = users.find(user => user.id === ticket.userId);
    return (
      ticket.title.toLowerCase().includes(nameFilter) || 
      (user && user.name.toLowerCase().includes(nameFilter))
    );
  });

  return (
    <div className="app">
      <NavBar 
        handleGroupChange={handleGroupChange} 
        handleSortChange={handleSortChange}
        handleNameFilter={handleNameFilter}
      />
      <Body 
        tickets={filteredTickets} 
        users={users}
        groupBy={groupBy} 
        sortBy={sortBy} 
      />
    </div>
  );
}

export default App;
