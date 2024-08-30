import { Link } from "react-router-dom";
import Slider from "react-slick";
import arrowicon from "../../assets/images/home/arrow.svg";
import tileicon from "../../assets/images/home/tile-icon.svg";
import mapicon from "../../assets/images/home/mapicon.svg";
import slideicon from "../../assets/images/home/slideicon.svg";

import fb from "../../assets/images/home/fb.svg";
import twitter from "../../assets/images/home/twitter.svg";
import linkedin from "../../assets/images/home/linkedin.svg";
import insta from "../../assets/images/home/insta.svg";
import "./home.css";

const Home = () => {
  const homeBannerSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  const aboutSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const sliderData = [
    {
      src: "images/gallery/glassRailing.png",
      text: "Glass Railing Work",
    },
    {
      src: "images/gallery/toughenGlassCanopy.png",
      text: "Toughen Glass Canopy",
    },
    {
      src: "images/gallery/ledMirror.png",
      text: "Decor your home",
    },
  ];

  const productData = [
    {
      src: "images/gallery/aluminumGlassBlazing.png",
      title: "Aluminum Works",
      className: "green-bg",
    },
    {
      src: "images/gallery/glassRailing.png",
      title: "Glass Works",
      className: "blue-bg",
    },
    {
      src: "images/gallery/toughenPartition.png",
      title: "Interior Works",
      className: "purple-bg",
    },
    {
      src: "images/gallery/aluminumModularKitchen.png",
      title: "Modular Kitchen",
      className: "cyan-bg",
    },
  ];

  const tilesData = [
    { src: "images/gallery/ledMirror.png", title: "LED Mirror" },
    { src: "images/gallery/toughenGlassCanopy.png", title: "Toughen Canopy" },
    { src: "images/gallery/upvcWindow.png", title: "UPVC Window" },
    { src: "images/gallery/steelRailing.png", title: "Steel Railing" },
  ];

  const projectData = [
    {
      src: "images/gallery/toughenGlassSpiderFitting.png",
      location: "Gomti Nagar",
      size: 12000,
    },
    {
      src: "images/gallery/profileGlassPartition.png",
      location: "Hazratganj",
      size: 12000,
    },
    {
      src: "images/gallery/designerMirror.png",
      location: "Aliganj",
      size: 12000,
    },
    {
      src: "images/gallery/aluminumPartition.png",
      location: "Jagrani",
      size: 12000,
    },
  ];

  return (
    <div className="home-content">
      <div className="home-slider">
        <Slider {...homeBannerSettings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="slider-list">
              <img src={slide.src} alt={`slide-${index}`} />
              <div className="text">
                <h2>{slide.text}</h2>

                <img src={slideicon} alt="slide-icon" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="social-menu">
          <ul>
            {[
              { icon: fb, alt: "fb" },
              { icon: twitter, alt: "twitter" },
              { icon: linkedin, alt: "linkedin" },
              { icon: insta, alt: "insta" },
            ].map((social, idx) => (
              <li key={idx}>
                <Link to="">
                  <img src={social.icon} alt={social.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="home-about">
        <div className="container">
          <div className="home-about-grid">
            <div className="home-about-content">
              <h2>
                DECORATIVE MODULAR <span>KITCHEN</span> SUPPLIER INTRODUCTION
              </h2>
              <p>
                Go Tile Imports & Exports operates as Go Tiles (Wholesale) and
                is owned by Nick Zhang in conjunction with his father, who
                oversees operations in China.
              </p>
              <p>
                His father manages all aspects of importing, including quality
                control, pricing, and shipping. As a buyer, you benefit from
                high-quality products at the best prices.
              </p>
              <Link to="/gallery">
                Learn More <img src={arrowicon} alt="arrow-icon" />
              </Link>
            </div>
            <div className="home-about-cover">
              <Slider {...aboutSettings}>
                {[
                  "images/gallery/aluminumModularKitchen.png",
                  "images/gallery/toughenProfileDoor.png",
                ].map((img, idx) => (
                  <div key={idx} className="home-about-image">
                    <img
                      src={img}
                      alt={`about-${idx}`}
                      className="h-96 object-cover w-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="home-product">
        <div className="container">
          <div className="heading-grid">
            <div className="heading">
              <span>About</span>
              <h2>
                About <span>Us</span>
              </h2>
            </div>
            <Link to="/gallery">
              Explore More <img src={arrowicon} alt="arrow-icon" />
            </Link>
          </div>

          <div className="home-product-grid">
            {productData.map((product, idx) => (
              <div
                key={idx}
                className={`home-product-box ${product.className}`}
              >
                <div className="home-product-box-cover">
                  <img src={product.src} alt={product.title} />
                </div>
                <h4>{product.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home-tiles">
        <div className="container">
          <div className="heading-grid">
            <div className="heading">
              <span>PRODUCTS</span>
              <h2>
                Discounted <span>Glass</span> Supply Lucknow
              </h2>
            </div>
            <Link to="/gallery">
              Explore More <img src={arrowicon} alt="arrow-icon" />
            </Link>
          </div>

          <div className="home-tiles-grid">
            {tilesData.map((tile, idx) => (
              <div key={idx} className="home-tiles-box">
                <div className="home-tiles-box-cover">
                  <img src={tile.src} alt={tile.title} />
                </div>
                <h4>
                  <img src={tileicon} alt="tile-icon" /> {tile.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home-project">
        <div className="container">
          <div className="heading-grid">
            <div className="heading">
              <span>OUR PROJECTS</span>
              <h2>
                We have done more than <span>100+</span> successful project
              </h2>
            </div>
            <Link to="/gallery">
              Explore More <img src={arrowicon} alt="arrow-icon" />
            </Link>
          </div>

          <div className="home-project-grid">
            {projectData.map((project, idx) => (
              <div key={idx} className="home-project-box">
                <div className="home-project-box-cover">
                  <img
                    src={project.src}
                    alt={`project-${idx}`}
                    className="h-96 object-cover w-full object-center"
                  />
                </div>
                <div className="home-project-info">
                  <span>
                    <img src={mapicon} alt="map-icon" /> {project.location}
                  </span>
                </div>
                <Link to="/">View Detail</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home-contact">
        <div className="home-contact-grid">
          <h2>
            Let&apos;s Be in <span>Touch</span>
          </h2>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
