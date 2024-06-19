import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MealItem from "../component/MealItem.jsx";
import Title from "../component/Title.jsx";
import axios from "axios";
import "../styles/Meal.css";
import { useState, useEffect } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("/api/menulist");
        console.log("Fetched menu items:", response.data);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error.message);
        console.error(error);
      }
    };

    fetchMenuItems();
  }, []);

  const drinks = menuItems.filter((item) => item.category === "drink");
  const foods = menuItems.filter((item) => item.category === "food");

  return (
    <>
      <Title title="Menu" />
      <div className="Menu">
        <p className="description">Drinks</p>
        <div className="menuList">
          <div className="CardContainer">
            {menuItems.length === 0 ? (
              <p>Loading menu...</p>
            ) : (
              drinks.map((item) => (
                <MealItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))
            )}
          </div>
        </div>
        <p className="description">Foods</p>
        <div className="menuList">
          <div className="CardContainer">
            {menuItems.length === 0 ? (
              <p>Loading menu...</p>
            ) : (
              foods.map((item) => (
                <MealItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
