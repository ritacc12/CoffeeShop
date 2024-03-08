import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer({ email }) {
  return (
    <section className="Footer_section">
      <div className="Footer">
        <div className="subscribeSection pt-serif-regular">
          <div>
            <p>Subscribe and stay on top of our latest news and promotions</p>
          </div>
          <div className="subscribeForm pt-serif-regular">
            <input
              className="inputForm"
              type="Email"
              value={email}
              placeholder="Enter your Email"
            ></input>
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>
        <div className="footer-logo-container">
          <Row>
            <Col>
              <span>
                <img
                  src="/pictures/facebook.svg"
                  width="20"
                  height="20"
                  alt="FB"
                ></img>
              </span>
            </Col>
            <Col>
              <span>
                <img
                  src="/pictures/instagram.svg"
                  width="20"
                  height="20"
                  alt="IG"
                ></img>
              </span>
            </Col>
          </Row>
        </div>
        <div className="arthur pt-serif-regular">
          <p>&#169; 2024 by Rita C</p>
        </div>
      </div>
    </section>
  );
}
