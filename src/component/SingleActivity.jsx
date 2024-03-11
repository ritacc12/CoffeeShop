import "../styles/News.css";
import Card from "react-bootstrap/Card";

export default function SingleActivity({
  id,
  activityTitle,
  img,
  description,
}) {
  return (
    <>
      <Card
        className="New_item shadow p-3 mb-5 bg-body-tertiary rounded"
        id={id}
      >
        <Card.Header className="item_title">{activityTitle}</Card.Header>
        <Card.Img variant="top" src={img} className="New-pic" />
        <Card.Body>
          <Card.Text>
            <span style={{ whiteSpace: "pre-wrap" }}>{description}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
