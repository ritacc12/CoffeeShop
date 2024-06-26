import Card from "react-bootstrap/Card";
import "../styles/Meal.css";
import { useState } from "react";

export default function MealItem({
  id,
  title,
  price,
  image,
  onAddToCart,
  onDecreaseItem,
}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <Card
        className="menuItem"
        style={{
          width: "18rem",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card.Img variant="top" src={image} alt={title} className="rounded" />
        <Card.Body>
          <div className="itemDescription">
            <span className="mealTitle">{title}</span>
            <p className="mealPrice">${price}</p>
          </div>
          <div className="cart-item-actions">
            <button
              className="MenuBtn"
              onClick={() =>
                onDecreaseItem(setQuantity(quantity <= 0 ? 0 : quantity - 1))
              }
            >
              -
            </button>
            <span className="ItemQuantity">{quantity}</span>
            <button
              className="MenuBtn"
              onClick={() => onAddToCart(id, setQuantity(quantity + 1))}
            >
              +
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
