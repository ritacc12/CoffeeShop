import Card from "react-bootstrap/Card";
import { Outlet, Link } from "react-router-dom";

export default function Catalog() {
  return (
    <>
      <div className="Catalog">
        <Card className="catalog-item position: relative">
          <Card.Img
            className="catalog-img  d-block"
            src="/pictures/story.jpg"
            alt="introduction"
          ></Card.Img>

          <Card.Body>
            <Card.Text className="pt-serif-bold-italic">INTRODUCTION</Card.Text>
            <a href="/about" className="stretched-link"></a>
          </Card.Body>
        </Card>

        <Card className="catalog-item position: relative">
          <Card.Img
            className="catalog-img d-block"
            src="/pictures/menu.jpg"
            alt="introduction"
          ></Card.Img>
          <Card.Body>
            <Card.Text className="pt-serif-bold-italic">MENU</Card.Text>
            <a href="/menu" className="stretched-link"></a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
