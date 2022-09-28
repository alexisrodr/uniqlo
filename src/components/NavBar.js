import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';


export const NavBar = () => {

    return (
        <Navbar bg="danger" expand="lg" sticky="top" className="shadow-lg p-3 mb-5">
            <Container>
                <Navbar.Brand href="#" className="text-white">UNIQLO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Unisex" className="text-white">Unisex</Nav.Link>
                        <Nav.Link href="#Hombres" className="text-white">Hombres</Nav.Link>
                        <Nav.Link href="#Mujeres" className="text-white">Mujeres</Nav.Link>
                        <Nav.Link href="#Accesorios" className="text-white">Accesorios</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

/*
<img
                        src="UNIQLO_logo.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Uniqlo logo"
                    />
*/