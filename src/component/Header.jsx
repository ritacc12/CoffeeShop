import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../styles/Header.css";
import CartModal from "./CartModal.jsx";
import { useRef } from "react";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();
  //const { items } = useContext(CartContext);

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleReceivedOrder() {
    return alert("訂單已收到！");
  }

  let modalActions = (
    <button
      style={{
        backgroundColor: "#9BC0D9",
        marginRight: "10px",
        borderRadius: "5px",
        borderColor: "white",
        color: "white",
        fontFamily: "PT Serif, serif",
      }}
    >
      Close
    </button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <div style={{ display: "flex", justifyContent: "right" }}>
        <button
          style={{
            backgroundColor: "#9BC0D9",
            marginRight: "10px",
            borderRadius: "5px",
            borderColor: "white",
            color: "white",
            fontFamily: "PT Serif, serif",
          }}
        >
          Close
        </button>
        <button
          style={{
            backgroundColor: "#F06A8A",
            borderRadius: "5px",
            borderColor: "white",
            color: "white",
            fontFamily: "PT Serif, serif",
          }}
          onClick={handleReceivedOrder}
        >
          Checkout
        </button>
      </div>
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
              <Nav.Link href="/news" className="NavTitle">
                最新消息
              </Nav.Link>
              <Nav.Link href="/shop" className="NavTitle">
                門市資訊
              </Nav.Link>
              <Nav.Link href="/reservation" className="NavTitle">
                線上訂餐
              </Nav.Link>
              <Nav.Link href="/about" className="NavTitle">
                關於我們
              </Nav.Link>
            </Nav>
            <div className="navCart">
              <button className="cartLink" onClick={handleOpenCartClick}>
                <img
                  src="/pictures/cart.svg"
                  alt="cart"
                  style={{
                    marginRight: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                ></img>
                Cart({cartQuantity})
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
        <Outlet />
      </Navbar>
    </>
  );
}
