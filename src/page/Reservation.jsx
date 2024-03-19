import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import MealItem from "../component/MealItem.jsx";
import Title from "../component/Title.jsx";
import { DUMMY_DRINKS } from "../assets/drink.js";

const Reservation = ({
  onAddItemToCart,
  // onUpdateCartItemQuantity,
  onDecreaseItem,
}) => {
  const drink = DUMMY_DRINKS.filter(function (item, index, array) {
    if (index < 6) {
      return item;
    }
  });

  const food = DUMMY_DRINKS.filter(function (item, index, array) {
    if (index > 5) {
      return item;
    }
  });

  return (
    <>
      <Title title="線上訂餐" ENGTitle="Online Booking" />

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row
          className="Menu"
          style={{
            marginTop: "60px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
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
                  {drink.map((product) => {
                    return (
                      <MealItem
                        {...product}
                        key={product.id}
                        onAddToCart={onAddItemToCart}
                        onDecreaseItem={onDecreaseItem}
                      />
                    );
                  })}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {" "}
                <div className="CardContainer">
                  {food.map((item) => {
                    return (
                      <MealItem
                        {...item}
                        key={item.id}
                        onAddToCart={onAddItemToCart}
                        onDecreaseItem={onDecreaseItem}
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

export default Reservation;
