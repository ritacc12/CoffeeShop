import Map from "../component/Map.jsx";
import Title from "../component/Title.jsx";
import "../styles/ShopInfo.css";

export default function ShopInfo() {
  return (
    <>
      <Title title="門市資訊"></Title>

      <div className="AboutShop">
        <div className="Map">
          <Map />
        </div>
        <div className="Info">
          <ul className="Info_item">
            <li className="address">
              Address:
              <br />
              No. 296, Section 2, Moon Road, Sun District, New Taipei City 220
            </li>
            <li className="time">
              Opening hours:
              <br />
              Mon - Fri: 9am - 8pm
              <br />
              ​​Saturday: 9am - 7pm
              <br />
              Sunday: 10am - 6pm
            </li>
            <li className="phone">Tel: 123-456-7890</li>
            <li className="email">Email: Jcoffee@mysite.com</li>
          </ul>
        </div>
      </div>
    </>
  );
}
