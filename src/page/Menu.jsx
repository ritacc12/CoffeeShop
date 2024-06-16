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

  const drinks = menuItems.filter((item) => item.id >= 1 && item.id <= 6);
  const foods = menuItems.filter((item) => item.id >= 7 && item.id <= 10);

  return (
    <>
      <Title title="Menu" />

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row
          className="Menu"
          style={{ marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}
        >
          <Col md={2} style={{ display: "flex", justifyContent: "center" }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="Nav-item">
                <Nav.Link eventKey="first">Drinks</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-item">
                <Nav.Link eventKey="second">Foods</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {" "}
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
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {" "}
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
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Menu;
