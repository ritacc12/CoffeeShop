import Card from "react-bootstrap/Card";
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from "react";
import "../styles/Meal.css";

export default function MealItem({ id, title, price, image, onAddToCart }) {
  //const { addItemToCart } = useContext(CartContext);

  return (
    <>
      <Card
        className="card"
        style={{
          width: "20rem",
          margin: "10px 20px 10px 20px",
        }}
        id={id}
      >
        <Card.Img variant="top" src={image} alt={title} className="rounded" />
        <Card.Body>
          <Card.Title className="mealTitle">{title}</Card.Title>
          <Card.Text className="mealPrice">${price}</Card.Text>
        </Card.Body>
        <button className="CartBtn" onClick={() => onAddToCart(id)}>
          Add to Cart
        </button>
      </Card>
    </>
  );
}
