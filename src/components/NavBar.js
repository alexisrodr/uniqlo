import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {

    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow p-3 mb-5">
            <Container>
                <Navbar.Brand as={Link} to='/' className="text-danger">
                    <img
                        src="/assets/UNIQLO_logo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Uniqlo logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/category/unisex' className="text-danger">Unisex</Nav.Link>
                        <Nav.Link as={Link} to='/category/hombres' className="text-danger">Hombres</Nav.Link>
                        <Nav.Link as={Link} to='/category/mujeres' className="text-danger">Mujeres</Nav.Link>
                        <Nav.Link as={Link} to='/category/accesorios' className="text-danger">Accesorios</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
