import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow mt-1">
      <Container>
        <Navbar.Brand href="#home">ACE_RECIPE'S</Navbar.Brand>
        <img src="" alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" m-auto">
            <Link style={{textDecoration:'none',marginTop:"7px",color:'orange'}}className="me-3" to="/">Home</Link>
            <Nav.Link className="me-3"href="#RECIPES">Recipes</Nav.Link>
            <Nav.Link id="abh"className="me-3"href="#ABOUT">About</Nav.Link>
            <Nav.Link className="me-3"href="#CUSTOMERS">Customers</Nav.Link>
            <Nav.Link className="me-3"href="#link">Categories</Nav.Link>

          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
