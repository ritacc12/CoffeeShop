import Map from "../component/Map.jsx";
import Title from "../component/Title.jsx";
import "../styles/ShopInfo.css";

export default function ShopInfo() {
  return (
    <>
      <Title title="Location"></Title>

      <div className="AboutShop">
        {/* <div className="Map">
          <Map />
        </div> */}
        <div className="Info">
          <ul className="Info_item">
            <li className="item">
              Address:
              <br />
              No. 296, Section 2, Moon Road, Sun District, New Taipei City 220
            </li>
            <li className="item">
              Opening hours:
              <br />
              Mon - Fri: 9am - 8pm
              <br />
              ​​Sat: 9am - 7pm
              <br />
              Sun: 10am - 6pm
            </li>
            <li className="item">
              Tel: 123-456-7890 <br></br>Email: Jcoffee@mysite.com
            </li>
            {/* <li className="email">Email: Jcoffee@mysite.com</li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
