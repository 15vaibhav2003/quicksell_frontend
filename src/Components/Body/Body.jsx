import React from 'react';
import './body.css';  // CSS for styling

function Body({ tickets, groupBy, sortBy }) {
  // Sorting tickets based on the selected `sortBy` option (e.g., priority or title)
  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority - b.priority; // Assuming priority is a numeric value
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title); // Alphabetical sort by title
    }
    return 0;
  });

  // Grouping tickets based on the selected `groupBy` (status, user, or priority)
  const groupedTickets = sortedTickets.reduce((acc, ticket) => {
    const groupKey = ticket[groupBy];  // groupBy can be 'status', 'user', or 'priority'
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2 className="kanban-column-title">{group}</h2>
          <div className="kanban-column-cards">
            {groupedTickets[group].map((ticket) => (
              <div key={ticket.id} className="kanban-card">
                <h3 className="ticket-title">{ticket.title}</h3>
                <p className="ticket-priority">Priority: {ticket.priority}</p>
                <p className="ticket-status">Status: {ticket.status}</p>
                <p className="ticket-user">User: {ticket.user}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
