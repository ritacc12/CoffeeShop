# Coffee Shop Website

This project is a Coffee Shop website built using React and Bootstrap. The website allows users to view details about the coffee shop, including the latest events, menus, and store information.

The menu data is stored using Node.js and served via an API, with Axios used on the frontend to fetch and categorize the menu data into drinks and food.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the Server](#running-the-server)
- [Running the Frontend](#running-the-frontend)

## Features

- View details about the coffee shop
- See the latest events
- Browse the menu categorized into drinks and food
- Responsive design using Bootstrap
- Backend API to serve menu data

## Tech Stack

- Frontend: React, Bootstrap
- Backend: Node.js, Express
- HTTP Client: Axios

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ritacc12/CoffeeShopWebsite.git
   cd CoffeeShopWebsite
   ```

2. Install dependencies for both frontend and backend:

- Backend dependencies

  ```bash
  cd Menu
  npm install
  ```

- Frontend dependencies

  ```bash
  npm install
  ```

3. Running the Server

- Start the backend server:

  ```bash
  cd backend
  node server.js
  ```

  The backend server will run on http://localhost:3001 and serve the menu data and static images.

- Running the Frontend
  ```bash
  npm run dev
  ```
  The React app will run on http://localhost:3000.
