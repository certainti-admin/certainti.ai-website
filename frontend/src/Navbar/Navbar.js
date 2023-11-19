import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/Certainti.svg';

function MyNavBar() {
    return (
        
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto me-5"> {/* Added me-3 here for spacing */}
                    <Nav.Link as={Link} to="/product">Product</Nav.Link>
                    <Nav.Link as={Link} to="/Solution">Solution</Nav.Link>
                    <Nav.Link as={Link} to="/Clients">Clients</Nav.Link>
                    <Nav.Link as={Link} to="/Services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/About Us">About Us</Nav.Link>
                </Nav>
                <div className="d-flex align-items-center">
                    <Form inline>
                        <Nav.Link as={Link} to="/Contact_Sales" className="me-2">Contact Sales</Nav.Link>
                    </Form>
                    <Link to="/Login" className="btn-link">
                        <Button variant="outline-success">Login</Button>
                    </Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default MyNavBar;
