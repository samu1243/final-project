import { func } from "prop-types";
import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faSignsPost,
  faSquareArrowUpRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function WebNav() {
  const { store, actions } = useContext(Context);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id="logo-nav">
          <Link to="/">
            <img
              src="https://i.imgur.com/w6NOPUc.png"
              alt="WoW Trade"
              width="200"
              height="80"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Server" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Americas & Oceania
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Europe</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!store.token ? (
              <>
                <Nav.Link id="login" href="/access">
                  Login
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                  ></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link id="sign-in" eventKey={2} href="/access">
                  Sign in <FontAwesomeIcon icon={faUser} />
                </Nav.Link>{" "}
              </>
            ) : (
              <>
                <Nav.Link id="post" href="/create-post">
                  create post
                  <FontAwesomeIcon icon={faSignsPost} />
                </Nav.Link>
                <Nav.Link
                  id="logout"
                  href="/logout"
                  onClick={() => actions.logout()}
                >
                  Logout{" "}
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                  ></FontAwesomeIcon>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default WebNav;
