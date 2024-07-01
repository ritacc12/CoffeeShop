# Coffee Shop Website

A modern, responsive Coffee Shop website built with React and Bootstrap. This project showcases a full-featured coffee shop experience, including menu browsing, event highlights, and online ordering capabilities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)

## Features

- 🏠 Home page with shop overview and latest events
- 🍽️ Interactive menu with categorized items (drinks and food)
- 🛒 Online ordering system
- 📍 Store location and information
- 📱 Responsive design for optimal viewing on all devices

## Tech Stack

### Frontend

- React
- Bootstrap
- Axios for API requests

### Backend

- Node.js
- Express

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ritacc12/CoffeeShop.git
   cd CoffeeShop
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Install backend dependencies:

   ```bash
   cd Menu
   npm install
   ```

## Running the Application

### Start the Backend Server

- Start the backend server:

  1. Navigate to the backend directory:

  ```bash
  cd Menu
  ```

  2. Start the server

  ```bash
  node server.js
  ```

  The backend will run on http://localhost:3001, serving menu data and handling orders.

### Launch the Fronted

- In the project root directory
  ```bash
  npm run dev
  ```
  The React app will be available at http://localhost:3000.

## API Documentation

### Endpoints

- `GET /api/menulist`: Retrieve the full menu
  - Response: Array of menu items with details like name, price, category, etc.
- `POST /api/checkout`: Process an order
  - Request body: Order details including items, quantities, and total price
  - Response: Order confirmation with order ID
- `GET /api/order`: Retrieve the full orders
  - Response: Array of all orders with details
- `GET /api/order/:id` : Retrieve specified order
  - Parameters: id - The unique identifier of the order
  - Response: Detailed information about the specified order
