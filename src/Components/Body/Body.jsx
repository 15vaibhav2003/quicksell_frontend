import React, { useState, useEffect } from 'react';
import './body.css';

function Body() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets));
  }, []);

  return (
    <div className="body">
      {/* Add grouping and sorting functionality */}
      {tickets.map((ticket) => (
        <div className="card" key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <p>Priority: {ticket.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
