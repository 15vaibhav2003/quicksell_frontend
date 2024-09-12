# Kanban Board - React Project

This project is a simple Kanban board built using **React**, which organizes tasks (tickets) into columns based on various criteria such as `status`, `priority`, and `user`. It also allows sorting tickets by different properties. Users assigned to tickets are displayed alongside task details.

## Features

- **Grouping**: Tickets can be grouped by `status`, `user`, or `priority`.
- **Sorting**: Tickets can be sorted by `priority` or `title`.
- **User Assignment**: Each ticket displays the user assigned to it, retrieved dynamically from the users' list.

## Project Structure

The core of the functionality is contained in the `Body.js` component, which handles:
- Fetching tickets and users.
- Sorting and grouping of tickets.
- Displaying the information in a Kanban board layout.

## Files

- `Body.js`: Main component rendering the Kanban board.
- `body.css`: Styles for the Kanban board layout and card appearance.

## Installation

To run this project locally, you need to have **Node.js** and **npm** installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board
