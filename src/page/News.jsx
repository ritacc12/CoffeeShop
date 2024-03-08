import Card from "react-bootstrap/Card";
import Title from "../component/Title.jsx";
import "../styles/News.css";

export default function News() {
  return (
    <>
      <Title title="最新消息" />
      <div className="News">
        <Card className="New_item shadow p-3 mb-5 bg-body-tertiary rounded">
          <Card.Header className="item_title">夜貓咖啡樂</Card.Header>
          <Card.Img
            variant="top"
            src="/pictures/nightCoffee.jpg"
            className="New-pic"
          />
          <Card.Body>
            <Card.Text>
              掌握夜晚的美好時光！晚間七點後，我們推出特別優惠活動：每杯指定咖啡，僅需95元！在舒適的燈光中，品味香濃咖啡，感受夜晚的靜謐與悠閒。歡迎您與摯愛、朋友們一同共度咖啡時光。
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="New_item shadow p-3 mb-5 bg-body-tertiary rounded">
          <Card.Header className="item_title">週歡咖聚樂</Card.Header>
          <Card.Img
            variant="bottom"
            src="/pictures/teaTime.jpg"
            className="New-pic"
          />
          <Card.Body>
            <Card.Text>
              歡聚週末！兩人以上同行，每位客人即享當日甜點一份。這是週末咖啡時光的最佳點綴，讓您與摯友共享美味，締造溫馨回憶。歡迎蒞臨「咖啡聚樂」，共同品味幸福。
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="New_item shadow p-3 mb-5 bg-body-tertiary rounded">
          <Card.Header className="item_title">品味午茶樂</Card.Header>
          <Card.Img
            variant="bottom"
            src="/pictures/Flower.jpg"
            className="New-pic"
          />
          <Card.Body>
            <Card.Text>
              沉浸在品味午茶的樂趣中！平日下午，我們推出午茶餐點優惠套餐，僅120元起。現在更推出令人迷戀的新品─抹茶蛋糕，帶給您獨特的味蕾享受。來「品味午茶樂」，細味美好時光。
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
