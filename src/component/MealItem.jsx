import Card from "react-bootstrap/Card";

export default function MealItem({ id, title, price, image }) {
  return (
    <>
      <Card
        style={{
          width: "16rem",
          margin: "10px",
        }}
        id={id}
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
