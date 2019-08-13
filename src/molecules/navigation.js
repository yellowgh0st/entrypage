import { Link } from "gatsby"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Logo from "../molecules/logotype"

const Navigation = () => {
    return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#Stats">Metrics</Nav.Link>
                                    <Nav.Link href="#About">About Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation