import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MealItem from "../component/MealItem.jsx";
import Title from "../component/Title.jsx";
import Cart from "../component/Cart.jsx";
import axios from "axios";
import "../styles/Meal.css";
import "../styles/Cart.css";
import { useState, useEffect } from "react";

const Menu = ({ onAddItemToCart }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("/api/menulist");
        // const response = await axios.get(
        //   `${process.env.REACT_APP_API_URL}/api/menulist`
        // );
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

  function handleAddItemToCart(item) {
    const existingItem = shoppingCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      setShoppingCart(
        shoppingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setShoppingCart([...shoppingCart, { ...item, quantity: 1 }]);
    }
  }

  function handleDecreaseItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      return prevShoppingCart
        .map((cartItem) =>
          cartItem.id === id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  }

  const itemTotals = shoppingCart.map((item) => item.price * item.quantity);
  const totalPrice = itemTotals.reduce((acc, itemTotal) => acc + itemTotal, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <>
      <Title title="Menu" />
      <div className="Menu">
        <p className="description">Drinks</p>
        {/* <div className="menuList"> */}
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
                onAddToCart={() => handleAddItemToCart(item)}
                onDecreaseItem={() => handleDecreaseItemToCart(item.id)}
              />
            ))
          )}
          {/* </div> */}
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
                  onAddToCart={() => handleAddItemToCart(item)}
                  onDecreaseItem={() => handleDecreaseItemToCart(item.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div id="cart">
        <span className="cart">Cart</span>
        {shoppingCart.length === 0 && (
          <p className="CartNoItem">No items in cart!</p>
        )}
        {shoppingCart.length > 0 && (
          <table className="cart-list">
            <thead className="cart-header">
              <tr>
                <th className="headerTitle">ID</th>

                <th className="headerTitle">Item</th>
                <th className="headerQuantity">Quantity</th>
                <th className="headerAmount">Amount</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((item, index) => (
                <tr key={item.id} className="cart-item">
                  <td className="ItemTitle">{index + 1} </td>
                  <td className="ItemTitle">{item.name}</td>
                  <td className="ItemQuantity">
                    <div className="cart-item-actions">
                      <button
                        className="CartBtn"
                        onClick={() => handleDecreaseItemToCart(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="ItemQuantity">{item.quantity}</span>
                      <button
                        className="CartBtn"
                        onClick={() => handleAddItemToCart(item, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="ItemPrice">${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="cart-total-price">
          Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
        <button className="checkoutBtn" onClick={handleCheckout}>
          Check out
        </button>
      </div>
    </>
  );
};

export default Menu;
