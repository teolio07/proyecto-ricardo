import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../cssComponents/Header.css';
const Header = ()=> {
    return(
        <header className='Header'>
            <div className='Title-header'>Desarrollos ADSI <b id='word'>Web</b></div>
            <div id="contenedor-menu">
                <Navbar expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav id='texto-menu' className="me-auto">
                                <Nav.Link className='texto-opcion' href="/">INICIO</Nav.Link>
                                <Nav.Link className='texto-opcion'href="/Nosotros">NOSOTROS</Nav.Link>
                                <Nav.Link className='texto-opcion'href="/Servicios">SERVICIOS</Nav.Link>
                                <Nav.Link className='texto-opcion'href="/Contacto">CONTACTO</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
            </Navbar>
            </div>
        </header>
    )
}

export default Header;
