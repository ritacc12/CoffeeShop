import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../styles/Header.css";

import { CartContext } from "../store/CartContext.jsx";
import { useContext, useRef } from "react";
import CartModal from "./CartModal.jsx";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  //const { items } = useContext(CartContext);

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
      />
      <Navbar
        className="navbar bg-body-tertiary"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="pt-serif-bold">
            J Coffee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/news">最新消息</Nav.Link>
              <Nav.Link href="/shop">門市資訊</Nav.Link>
              <Nav.Link href="/menu">美味佳餚</Nav.Link>
              <Nav.Link href="/about">關於我們</Nav.Link>
            </Nav>
            <span>
              <button className="CartBtn" onClick={handleOpenCartClick}>
                Cart({cartQuantity})
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
        <Outlet />
      </Navbar>
    </>
  );
}
