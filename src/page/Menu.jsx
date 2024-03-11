import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MealItem from "../component/MealItem.jsx";
import Title from "../component/Title.jsx";
import { DUMMY_DRINKS } from "../assets/drink.js";
import { FOODS } from "../assets/food.js";

import "../styles/Meal.css";

const Menu = () => {
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
                  {DUMMY_DRINKS.map((product) => {
                    return (
                      <MealItem
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        aria-labelledby="tab-drink"
                      />
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {" "}
                <div className="CardContainer">
                  {FOODS.map((item) => {
                    return (
                      <MealItem
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                      />
                    );
                  })}
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
