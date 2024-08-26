import { Link } from "react-router-dom";
import logo from "../../assets/images/footer/logo.png";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const menuItems = [
    {
      title: "Features",
      links: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "About Us",
          url: "/",
        },
        {
          title: "Gallery",
          url: "/gallery",
        },
        {
          title: "Contact Us",
          url: "/",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <Link to="/">
              <img src={logo} alt="footer-logo" width={140} height={30} />
            </Link>
          </div>

          {menuItems.map((menu, index) => (
            <div key={index} className="footer-column">
              <h3>{menu.title}</h3>
              <ul>
                {menu.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link?.url ?? "/"} disabled={link.url === "/not"}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-address">
              <li>Behind Bank of Baroda, Kursi Road, Tehripuliya, Lucknow</li>
              <li>
                Call: <a href="tel:+917524891063">+91 7524891063</a>
              </li>
              <li>
                WhatsApp:{" "}
                <a href="https://wa.me/917524891063" target="_blank">
                  +91 7524891063
                </a>
              </li>
              <li>
                Email: <a href="mailto:ayan@gmail.com">ayan@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer">
          <p>
            Copyright ©{currentYear} Ayan Glass & Aluminum Works. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
