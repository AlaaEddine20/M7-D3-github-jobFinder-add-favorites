import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, Button } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <NavbarBrand>Job Finder</NavbarBrand>
            <Link to="/favorites">
              <Button>Favorites </Button>
            </Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
