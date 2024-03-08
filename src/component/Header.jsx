import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
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
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}
