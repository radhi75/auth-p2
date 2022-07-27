import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./redux/Action/authAction";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.Authreducer.user);
  const token = localStorage.getItem("token");
  return (
    <>
      {!token && (
        <Navbar bg="warning" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto" style={{ marginLeft: "65rem" }}>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Sign-up
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
      {token && user && (
        <Navbar bg="warning" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto" style={{ marginLeft: "65rem" }}>
              <Nav.Link
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                log out
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
