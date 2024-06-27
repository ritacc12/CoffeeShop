import Card from "react-bootstrap/Card";
import "../styles/Meal.css";
import { useState, useEffect } from "react";

export default function MealItem({
  id,
  title,
  price,
  image,
  initialQuantity, // 從父組件中接收初始數量
  onAddToCart,
  onDecreaseItem,
}) {
  const [quantity, setQuantity] = useState(initialQuantity || 0); // 初始數量為父組件傳遞的初始值或者0

  useEffect(() => {
    setQuantity(initialQuantity || 0);
  }, [initialQuantity]);

  const handleAddToCartClick = () => {
    setQuantity(quantity + 1);
    onAddToCart(); // 呼叫父組件的加入購物車函式
  };

  const handleDecreaseItemClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onDecreaseItem(); // 呼叫父組件的減少購物車商品數量函式
    }
  };
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
            <button className="MenuBtn" onClick={handleDecreaseItemClick}>
              -
            </button>
            <span className="ItemQuantity">{quantity}</span>
            <button className="MenuBtn" onClick={handleAddToCartClick}>
              +
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
