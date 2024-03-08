import Title from "../component/Title.jsx";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <Title title="關於我們"></Title>

      <div className="About">
        <div className="shop_img">
          <img
            src="/pictures/shop.jpg"
            alt="shop"
            style={{ height: "400px", borderRadius: "5px" }}
          ></img>
        </div>
        <div className="shop_story">
          <span className="story">
            在2024年的情人節，J
            coffee在新北市板橋區正式開業，創辦者Rita是一位對咖啡充滿熱情的年輕人。
            她深深愛著咖啡的香醇風味，因此決心創立這家咖啡店，為顧客帶來獨特的咖啡體驗。
            <br />
            <br />
            致力於滿足每一位顧客的口味需求，提供多元化的咖啡選擇，從濃郁的拿鐵到清新的冰滴咖啡，每一杯都經過精心調製。店內打造了一個舒適的環境，讓顧客在品味美味咖啡的同時感受愉悅的氛圍。
            <br />
            <br />
            更進一步打造了完整的產、製、銷一條龍的產業鏈，從精選咖啡豆的產地到精密的烘焙過程，再到精心設計的包裝和獨特的咖啡器具，每一個步驟都經過嚴格的品質把關，確保顧客品嚐到的是最高水準的咖啡。
            <br />
            <br />
            以熱情、用心和品質為基石，期望成為板橋區咖啡愛好者的首選，讓每一位顧客都能在這裡找到屬於自己的咖啡時光。
          </span>
        </div>
      </div>
    </>
  );
}
