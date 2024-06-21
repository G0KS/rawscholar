import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
<<<<<<< HEAD
=======
import Button from "react-bootstrap/Button";
>>>>>>> master

import Logo from "../../assets/Logo.svg";
import Search from "../../assets/icons/Search.svg";

import style from "./NavbarComponent.module.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
<<<<<<< HEAD
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="Logo"
              src={Logo}
              height="50"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
            <div className="input-group">
              <input
                className={style.searchBox}
                type="text"
                placeholder="Search Colleges and Courses"
              />
              <button className={style.search}>
                <img src={Search} alt="Search" />
              </button>
            </div>
            <div className="d-flex gap-4 fw-medium">
              <Nav.Link className={`${style.navHeading}`} href="/services">
                Services
              </Nav.Link>
              <Nav.Link className={`${style.navHeading}`} href="/about">
                About
              </Nav.Link>
              <Nav.Link className={`${style.navHeading}`} href="/contactus">
                Contact
              </Nav.Link>
              <Link to="/signup">
                <button
                  className="btn rounded-pill"
                  style={{
                    backgroundColor: "#067bc2",
                    color: "white",
                    width: "100px",
                  }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
=======
   return (
      <Navbar expand="lg">
         <Container>
            <Navbar.Brand href="/">
               <img
                  alt="Logo"
                  src={Logo}
                  height="50"
                  className="d-inline-block align-top"
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto gap-5">
                  <div className="input-group">
                     <input
                        className={style.searchBox}
                        type="text"
                        placeholder="Search Colleges and Courses"
                     />
                     <button className={style.search}>
                        <img src={Search} alt="Search" />
                     </button>
                  </div>
                  <div className="d-flex gap-4 fw-medium">
                     <Nav.Link className={`${style.navHeading}`} href="/services">Services</Nav.Link>
                     <Nav.Link className={`${style.navHeading}`} href="/about">About</Nav.Link>
                     <Nav.Link className={`${style.navHeading}`} href="/contact">Contact</Nav.Link>
                     <Link to="/signup">
                        <Button className={style.button} type="submit">
                           Sign Up
                        </Button>
                     </Link>
                  </div>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
>>>>>>> master
}

export default NavbarComponent;
