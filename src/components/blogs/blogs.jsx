import { Link } from "react-router-dom";

import blogs1 from "../../assets/images/blogs/blog-1.svg";
import arrow from "../../assets/images/blogs/arrow.svg";
import Pagination from "react-bootstrap/Pagination";

import "./blogs.css";

const Blogs = () => {
  return (
    <div className="home-content">
      <div className="header-title">
        <div className="container">
          <div className="header-title-text">
            <h2>
              Our <span>Blogs</span>
            </h2>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>/ Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="blogs-section">
        <div className="container">
          <div className="blogs-grid-section">
            <div className="blogs-box">
              <img src={blogs1} alt="blogs" />
              <h4>
                A small business is only as good as its tools and it is totally
                true.
              </h4>
              <p>
                We&apos;ve all experienced the chaos of multiple spreadsheets,
                tracking and insight tools, and scrambling for the right data at
                the right time.
              </p>
              <Link to="/">
                Read Post <img src={arrow} alt="" />
              </Link>
            </div>
            <div className="blogs-box">
              <img src={blogs1} alt="blogs" />
              <h4>
                A small business is only as good as its tools and it is totally
                true.
              </h4>
              <p>
                We&apos;ve all experienced the chaos of multiple spreadsheets,
                tracking and insight tools, and scrambling for the right data at
                the right time.
              </p>
              <Link to="/">
                Read Post <img src={arrow} alt="" />
              </Link>
            </div>
            <div className="blogs-box">
              <img src={blogs1} alt="blogs" />
              <h4>
                A small business is only as good as its tools and it is totally
                true.
              </h4>
              <p>
                We&apos;ve all experienced the chaos of multiple spreadsheets,
                tracking and insight tools, and scrambling for the right data at
                the right time.
              </p>
              <Link to="/">
                Read Post <img src={arrow} alt="" />
              </Link>
            </div>
            <div className="blogs-box">
              <img src={blogs1} alt="blogs" />
              <h4>
                A small business is only as good as its tools and it is totally
                true.
              </h4>
              <p>
                We&apos;ve all experienced the chaos of multiple spreadsheets,
                tracking and insight tools, and scrambling for the right data at
                the right time.
              </p>
              <Link to="/">
                Read Post <img src={arrow} alt="" />
              </Link>
            </div>
            <div className="blogs-box">
              <img src={blogs1} alt="blogs" />
              <h4>
                A small business is only as good as its tools and it is totally
                true.
              </h4>
              <p>
                We&apos;ve all experienced the chaos of multiple spreadsheets,
                tracking and insight tools, and scrambling for the right data at
                the right time.
              </p>
              <Link to="/">
                Read Post <img src={arrow} alt="" />
              </Link>
            </div>
            <div className="blogs-box">
              <img src={blogs1} alt="blogs" />
              <h4>
                A small business is only as good as its tools and it is totally
                true.
              </h4>
              <p>
                We&apos;ve all experienced the chaos of multiple spreadsheets,
                tracking and insight tools, and scrambling for the right data at
                the right time.
              </p>
              <Link to="/">
                Read Post <img src={arrow} alt="" />
              </Link>
            </div>
          </div>
          <div className="blogs-pagination">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item disabled>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item disabled>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
