import React, { useState } from "react";
import { Image, Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo7 from "../img/logo7.jpg"

const Menu = () => {
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") {
      setError("El campo de búsqueda no puede estar vacío");
    } else {
      console.log("Realizar búsqueda:", busqueda);
      setError("");
    }
  };

  return (
    <Navbar variant="dark" expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={logo7}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-item nav-link">
              <h5>HOME</h5>
            </NavLink>
            <NavLink end to="/character" className="nav-item nav-link">
              <h5>CHARACTERS</h5>
            </NavLink>
            <NavLink end to="/comics" className="nav-item nav-link">
              <h5>CÓMICS</h5>
            </NavLink>
            <NavLink end to="/universocinematografico" className="nav-item nav-link">
              <h5>UNIVERSO CINEMATOGRÁFICO</h5>
            </NavLink>
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e) => setBusqueda(e.target.value)}
            />
            {error && <p className="text-danger">{error}</p>}
            <Button variant="outline-light" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

