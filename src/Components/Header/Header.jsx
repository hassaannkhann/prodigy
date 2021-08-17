import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import styles from "../Header/Header.module.scss";
import "../includes/style.scss";
import SearchPage from "../SearchPage/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <Navbar className={styles.navbar_mini}>
        <div
          className="container"
          style={{ paddingLeft: "200px", margin: "auto" }}
        >
          <div className={`${styles.navbar_nav} ${styles.navbar_left}`}>
            <span>
              <a href="tel:+923018233446" className={styles.color_white}>
                <i className="fa fa-phone"></i>+92-301-8233446
              </a>
            </span>
            |
            <span>
              <a href="mailto:info@bizintel.com" className={styles.color_white}>
                <i className="fa fa-envelope"></i>info@bizintel.com
              </a>
            </span>
            |
            <span>
              {" "}
              <i className="fa fa-map-marker"></i>Mehdi Tower Shahra-e-Faisal,
              Karachi, Pakistan
            </span>
          </div>
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt={Logo}
              className="fluid"
              style={{ width: "120px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink activeClassName="active" to="/About">About Us</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink activeClassName="active" to="/Clients">Our Clients</NavLink>
              </Nav.Link>
              <Nav.Link><NavLink activeClassName="active" to="/JoinUs">Join Us</NavLink></Nav.Link>
              <Nav.Link>
                <NavLink activeClassName="active" to="/Contact">Contact</NavLink>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <SearchPage />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
