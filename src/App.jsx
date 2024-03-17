import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./page/Layout.jsx";
import Header from "./component/Header.jsx";
import ShopInfo from "./page/ShopInfo.jsx";
import News from "./page/News.jsx";
import About from "./page/About.jsx";
import Footer from "./component/Footer.jsx";
import Menu from "./page/Menu.jsx";
import Error from "./page/Error.jsx";
import { useState } from "react";
import { DUMMY_DRINKS } from "./assets/drink.js";
//import CartContextProvider from "./store/CartContext.jsx";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_DRINKS.find((products) => products.id === id);
        updatedItems.push({
          id: id,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
        console.log(id, product.title);
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  return (
    <>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />

      <Routes>
        <Route path="/" element={<Layout />} errorElement={<Error />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/shop" element={<ShopInfo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/menu"
          element={<Menu onAddItemToCart={handleAddItemToCart} />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
