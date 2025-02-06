import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
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
          title: "Gallery",
          url: "/gallery2",
        },
        {
          title: "Video",
          url: "/video",
        },
        {
          title: "Collection",
          url: "/gallery",
        },
        {
          title: "Contact Us",
          url: "/contact",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column flex flex-col gap-3 max-sm:items-center">
            <Link to="/" className="max-sm:flex max-sm:justify-center">
              <img
                src="images/logo.svg"
                alt="footer-logo"
                width={150}
                height={30}
              />
            </Link>
            <div className="flex gap-2">
              <Link
                to="https://www.facebook.com/share/15x7J4Uq9T/"
                target="_blank"
              >
                <FaFacebookSquare className="text-gray-900 hover:text-[#1877F2] text-4xl transition-all" />
              </Link>
              <Link
                to="https://www.instagram.com/ayanglass_aluminum_fabrication?igsh=MW40dHBoZDNxeDg0"
                target="_blank"
              >
                <FaInstagramSquare className="text-gray-900 hover:text-[#fd1d1d] text-4xl transition-all" />
              </Link>
              <Link
                to="https://youtube.com/@ayanglass-b1x?si=b4LmtNp79NfFSosp"
                target="_blank"
              >
                <FaYoutubeSquare className="text-gray-900 hover:text-[#cd201f] text-4xl transition-all" />
              </Link>
            </div>
          </div>

          {menuItems.map((menu, index) => (
            <div key={index} className="footer-column max-sm:w-1/3 max-sm:pb-6">
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

          <div className="footer-column max-sm:w-2/3 max-sm:pb-6">
            <h3>Contact Us</h3>
            <ul className="footer-address">
              <li>
                Behind Bank of Baroda, Kursi Rd, Tedhi Pulia, Adil Nagar,
                Lucknow, Uttar Pradesh 226021
              </li>
              <li>
                Call: <a href="tel:+916392600686">+91 6392600686</a>
              </li>

              <li>
                Email:{" "}
                <a href="mailto:abraamgazi@gmail.com">abraamgazi@gmail.com</a>
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
