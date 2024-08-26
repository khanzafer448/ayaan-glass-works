import { Link } from "react-router-dom";
import aboutcover1 from "../../assets/images/about/about-cover1.png";
import aboutcover2 from "../../assets/images/about/about-cover2.png";
import aboutproduct from "../../assets/images/about/about-product.png";
import "./about.css";

import LeftArrow from "../../assets/images/about/leftArrow.svg";
import RightArrow from "../../assets/images/about/rightArrow.svg";

const About = () => {
  return (
    <div className="home-content">
      <div className="header-title">
        <div className="container">
          <div className="header-title-text">
            <h2>
              About <span>Us</span>
            </h2>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>/ About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-cover">
              <img src={aboutcover1} alt="" />
              <span>
                <img src={aboutcover2} alt="" />
              </span>
            </div>

            <div className="about-content">
              <span>HOW WE FUNCTION</span>
              <h2>
                About <span>Go Tiles</span>flooring company
              </h2>
              <p>
                We import most of our tiles straight from the factory and sell
                them directly to the public at wholesale prices, which has
                allowed Go Tiles to expand into the Australian market quickly.
                This “high volume low margin approach” is simple but hard to
                implement.
              </p>
              <p>
                Almost all of our business is from referrals. We know from
                first-hand experience that you most likely would have found out
                about us from friends or family and after you have seen our
                product range and prices, experienced our service then bought
                our tiles, you also will be so impressed you will tell others
                about us. Over 95% of people that visit us end up buying from us
                and we’re sure you will too.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-product">
        <div className="container">
          <div className="about-product-grid">
            <div className="about-product-content">
              <span>WHY US</span>
              <h2>
                The Best Quality <span>Products</span>
              </h2>
              <p>
                We import most of our tiles straight from the factory and sell
                them directly to the public at wholesale prices, which has
                allowed Go Tiles to expand into the Australian market quickly.
                This “high volume low margin approach” is simple but hard to
                implement.
              </p>
            </div>

            <div className="about-product-cover">
              <img src={aboutproduct} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-pagination">
        <div className="arrowIcon">
          <img src={LeftArrow} alt="" />
        </div>
        <div className="relative-page">1</div>
        <div className="current-page">2</div>
        <div className="relative-page">3</div>
        <div className="arrowIcon">
          <img src={RightArrow} alt="" />
        </div>
      </div>

      <div className="home-contact">
        <div className="home-contact-grid">
          <h2>
            Let’s Be in <span> Touch</span>{" "}
          </h2>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};
export default About;
