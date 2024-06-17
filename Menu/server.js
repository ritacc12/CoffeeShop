const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

let menuList = [
  {
    id: 1,
    name: "American",
    price: 60,
    image: "http://localhost:3001/image/latte.jpg",
  },
  {
    id: 2,
    name: "Latte",
    price: 80,
    image: "http://localhost:3001/image/latte.jpg",
  },
  {
    id: 3,
    name: "Black Tea",
    image: "http://localhost:3001/image/blacktea.jpg",
    price: 70,
  },
  {
    id: 4,
    name: "Juice",
    image: "http://localhost:3001/image/juice.jpg",
    price: 70,
  },
  {
    id: 5,
    name: "Tea",
    image: "http://localhost:3001/image/tea.jpg",
    price: 70,
  },
  {
    id: 6,
    name: "Cappuccino",
    image: "http://localhost:3001/image/cappuccino.jpg",
    price: 110,
  },
  {
    id: 7,
    name: "Matcha Cake",
    image: "http://localhost:3001/image/matcha.jpg",
    price: 120,
  },
  {
    id: 8,
    name: "Pancake ",
    image: "http://localhost:3001/image/pancake.jpg",
    price: 150,
  },
  {
    id: 9,
    name: "Cheese Cake",
    image: "http://localhost:3001/image/cheeseCake.jpg",
    price: 150,
  },
  {
    id: 10,
    name: "Steak Sandwich",
    image: "http://localhost:3001/image/steaksandwich.jpg",
    price: 150,
  },
  {
    id: 11,
    name: "Strawberry tart",
    image: "http://localhost:3001/image/strawberry.jpg",
    price: 120,
  },
];

app.use(express.json());

app.get("/api/menulist", (req, res) => {
  console.log("Request headers:", req.headers);
  console.log("Received request for /api/menulist");
  console.log("menuList:", menuList);
  res.json(menuList);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
