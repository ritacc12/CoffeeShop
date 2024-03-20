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
  //const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const InitQuantity = 0;
  return (
    <>
      <Card
        className="card"
        style={{
          width: "20rem",
          margin: "10px 20px 10px 20px",
          padding: "30px",
        }}
        id={id}
      >
        <Card.Img variant="top" src={image} alt={title} className="rounded" />
        <Card.Body className="cardBody">
          <Card.Title className="mealTitle" style={{ fontSize: "25px" }}>
            {title}
          </Card.Title>
          <Card.Text className="mealPrice" style={{ fontSize: "18px" }}>
            ${price}
          </Card.Text>
          <div className="cart-item-actions">
            <button
              className="CartBtn"
              onClick={() =>
                onDecreaseItem(
                  id,
                  setQuantity(quantity <= 0 ? 0 : quantity - 1)
                )
              }
            >
              -
            </button>
            <span className="ItemQuantity">{quantity}</span>
            <button
              className="CartBtn"
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
