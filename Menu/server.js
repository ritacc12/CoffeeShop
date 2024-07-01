const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const orderRoute = require("./order.js");

app.use(cors());
app.use(express.static("public"));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://jcoffeedemo.zeabur.app/"],
  })
);
let menuList = [
  {
    id: 1,
    name: "American",
    price: 70,
    image: "http://localhost:3001/image/blackcoffee.jpg",
    category: "drink",
  },
  {
    id: 2,
    name: "Latte",
    price: 80,
    image: "http://localhost:3001/image/latte.jpg",
    category: "drink",
  },
  {
    id: 3,
    name: "Black Tea",
    image: "http://localhost:3001/image/blacktea.jpg",
    price: 70,
    category: "drink",
  },
  {
    id: 4,
    name: "Juice",
    image: "http://localhost:3001/image/juice.jpg",
    price: 70,
    category: "drink",
  },
  {
    id: 5,
    name: "Tea",
    image: "http://localhost:3001/image/tea.jpg",
    price: 70,
    category: "drink",
  },
  {
    id: 6,
    name: "Cappuccino",
    image: "http://localhost:3001/image/cappuccino.jpg",
    price: 110,
    category: "drink",
  },
  {
    id: 7,
    name: "Matcha Cake",
    image: "http://localhost:3001/image/matcha.jpg",
    price: 120,
    category: "food",
  },
  {
    id: 8,
    name: "Pancake ",
    image: "http://localhost:3001/image/pancake.jpg",
    price: 150,
    category: "food",
  },
  {
    id: 9,
    name: "Cheese Cake",
    image: "http://localhost:3001/image/cheeseCake.jpg",
    price: 150,
    category: "food",
  },
  {
    id: 10,
    name: "Steak Sandwich",
    image: "http://localhost:3001/image/steaksandwich.jpg",
    price: 150,
    category: "food",
  },
  {
    id: 11,
    name: "Strawberry tart",
    image: "http://localhost:3001/image/strawberry.jpg",
    price: 120,
    category: "food",
  },
  {
    id: 12,
    name: "Avocado Sandwich ",
    image: "http://localhost:3001/image/avocadosandwich.jpg",
    price: 120,
    category: "food",
  },
];

app.use(express.json());

app.get("/api/menulist", (req, res) => {
  // console.log("Request headers:", req.headers);
  //console.log("Received request for /api/menulist");
  // console.log("menuList:", menuList);
  res.json(menuList);
});

// 使用订单相关的路由
app.use("/api", orderRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
