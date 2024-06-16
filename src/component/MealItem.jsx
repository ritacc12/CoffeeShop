import Card from "react-bootstrap/Card";
import "../styles/Meal.css";

export default function MealItem({ title, price, image }) {
  return (
    <>
      <Card
        style={{
          width: "20rem",
          margin: "10px 20px 10px 20px",
        }}
      >
        <Card.Img variant="top" src={image} alt={title} className="rounded" />
        <Card.Body>
          <Card.Title className="mealTitle">{title}</Card.Title>
          <Card.Text className="mealPrice">${price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
