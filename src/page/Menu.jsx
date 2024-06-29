import MealItem from "../component/MealItem.jsx";
import Title from "../component/Title.jsx";
import axios from "axios";
import "../styles/Meal.css";
import "../styles/Cart.css";
import { useState, useEffect } from "react";
import OrderModal from "../component/OrderModal.jsx";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

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
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((menuItem) =>
        menuItem.id === item.id
          ? { ...menuItem, quantity: (menuItem.quantity || 0) + 1 }
          : menuItem
      )
    );

    const existingItem = shoppingCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      setShoppingCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setShoppingCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  }

  function handleDecreaseItemToCart(id) {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((menuItem) =>
        menuItem.id === id && menuItem.quantity > 0
          ? { ...menuItem, quantity: menuItem.quantity - 1 }
          : menuItem
      )
    );
    setShoppingCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        //過濾掉數量變為0的品項，將它們從購物車中移除
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  const handleCheckout = async () => {
    try {
      const orderData = {
        items: shoppingCart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        totalPrice: totalPrice,
      };

      const response = await fetch("http://localhost:3001/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        setOrderDetails(result.order);
        setShowModal(true);
        console.log("Order details:", result.order);

        //清空購物車
        setShoppingCart([]);

        // 更新菜單項目的初始數量為零
        setMenuItems((prevMealItems) =>
          prevMealItems.map((item) => ({
            ...item,
            quantity: 0,
          }))
        );
      } else {
        alert("Error during checkout:", response.statusText);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Checkout failed");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const itemTotals = shoppingCart.map((item) => item.price * item.quantity);
  const totalPrice = itemTotals.reduce((acc, itemTotal) => acc + itemTotal, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <>
      <Title title="Menu" />
      <div className="Menu">
        <p className="description">Drinks</p>
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
                quantity={item.quantity || 0}
                onAddToCart={() => handleAddItemToCart(item)}
                onDecreaseItem={() => handleDecreaseItemToCart(item.id)}
              />
            ))
          )}
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
                  quantity={item.quantity || 0}
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
                      <span className="CartQuantity">{item.quantity}</span>
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
        {shoppingCart.length > 0 && (
          <button className="checkoutBtn" onClick={handleCheckout}>
            Check out
          </button>
        )}
        {orderDetails && (
          <OrderModal
            show={showModal}
            handleClose={() => setShowModal(false)}
            orderDetails={orderDetails}
          />
        )}
      </div>
    </>
  );
};

export default Menu;
