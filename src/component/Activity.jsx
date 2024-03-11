import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
export default function Activity() {
  return (
    <Carousel className="activities">
      <Carousel.Item data-bs-interval="3000">
        <a href="http://localhost:3000/news">
          <img
            className="activity-pic d-block w-100 rounded"
            src="/pictures/nightCoffee.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="activity-title">夜貓咖啡樂</h5>
            <p className="activity-description">
              夜貓專享 每杯咖啡享95元 尊享夜晚咖啡時光
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item data-bs-interval="3000">
        <a href="http://localhost:3000/news">
          <img
            className="activity-pic d-block w-100 rounded "
            src="/pictures/teaTime.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 className="activity-title">週歡咖聚樂</h5>
            <p className="activity-description">
              週末限定 親朋好友共享美好時光 每杯咖啡享優惠價
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item data-bs-interval="3000">
        <a href="http://localhost:3000/news">
          <img
            className="activity-pic d-block w-100 rounded "
            src="/pictures/Flower.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className="activity-title">品味午茶樂</h5>
            <p className="activity-description">
              全新下午茶套餐 結合特色新品咖啡 享輕松悠閒下午
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
