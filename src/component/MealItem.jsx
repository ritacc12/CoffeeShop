import Card from "react-bootstrap/Card";
import "../styles/Meal.css";

export default function MealItem({ title, price, image }) {
  return (
    <>
      <Card
        className="menuItem"
        // style={{
        //   width: "20rem",
        //   margin: "10px",
        //   display: "flex",
        //   justifyContent: "center",
        // }}
      >
        <Card.Img variant="top" src={image} alt={title} className="rounded" />
        <Card.Body>
          <div className="itemDescription">
            <span className="mealTitle">{title}</span>
            <p className="mealPrice">${price}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
