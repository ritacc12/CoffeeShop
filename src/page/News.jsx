import Title from "../component/Title.jsx";
import SingleActivity from "../component/SingleActivity.jsx";
import "../styles/News.css";
import { ListGroup, Tab } from "react-bootstrap";

export default function News() {
  return (
    <>
      <Title title="News" />
      <div className="News">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <ListGroup defaultActiveKey="#link1" className="listGroup">
            <ListGroup.Item action variant="light" href="#link1">
              夜貓咖啡樂
            </ListGroup.Item>
            <ListGroup.Item action variant="light" href="#link2">
              週歡咖聚樂
            </ListGroup.Item>
            <ListGroup.Item action variant="light" href="#link3">
              品味午茶樂
            </ListGroup.Item>
          </ListGroup>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <SingleActivity
                href="/new/#link1"
                activityTitle="夜貓咖啡樂"
                img="/pictures/nightCoffee.jpg"
                description="掌握夜晚的美好時光！晚間七點後，我們推出特別優惠活動：每杯指定咖啡，僅需95元！
          在舒適的燈光中，品味香濃咖啡，感受夜晚的靜謐與悠閒。歡迎您與摯愛、朋友們一同共度咖啡時光。"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <SingleActivity
                href="#link2"
                activityTitle="週歡咖聚樂"
                img="/pictures/teaTime.jpg"
                description="歡聚週末！兩人以上同行，每位客人即享當日甜點一份。
          讓您與摯友共享美味，締造溫馨回憶。歡迎蒞臨「咖啡聚樂」，共同品味幸福。"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              <SingleActivity
                href="#link3"
                activityTitle="品味午茶樂"
                img="/pictures/Flower.jpg"
                description="沉浸在品味午茶的樂趣中！平日下午，我們推出午茶餐點優惠套餐，僅120元起。
          現在更推出令人迷戀的新品─抹茶蛋糕，帶給您獨特的味蕾享受。來「品味午茶樂」，細味美好時光。"
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
}
