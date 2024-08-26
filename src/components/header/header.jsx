import { useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/footer/logo.png";
import "./header.css";

const NAV_DATA = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/not",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Contact Us",
    url: "/not",
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <div className="container">
          <div className="nam-menu-grid">
            <Navbar.Brand href="/">
              <div className="logo">
                <img src={logo} alt="logo" width={140} height={30} />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {NAV_DATA?.map((item, i) => (
                  <Nav.Link
                    key={i}
                    className={location.pathname === item?.url ? "active" : ""}
                    href={item?.url ?? "/"}
                    disabled={item.url === "/not"}
                  >
                    {item?.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
