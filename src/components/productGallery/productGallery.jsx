import { Link } from "react-router-dom";

const ProductGallery = () => {
  return (
    <div className="home-content">
      <div className="header-title">
        <div className="container">
          <div className="header-title-text">
            <h2>
              Our <span>Gallery</span>
            </h2>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">/ Gallery</Link>
              </li>
              <li>/ Product Gallery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
