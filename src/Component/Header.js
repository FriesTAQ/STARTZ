import React, { Component } from "react";
import {
  Button,
  Container,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  Form,
} from "react-bootstrap";
import style from "./star.css";
import About from "../Pages/Planets";
import Home from "../Pages/Starships";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">StarDB</Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/starships">Starships</Nav.Link>
              <Nav.Link href="/planets">Planets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
