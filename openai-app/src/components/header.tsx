import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import reactLogo from '../assets/react.svg';
import '../styles/App.css';
import '../styles/index.css';

const Header: React.FC = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark' fixed="top" style={{ marginLeft: '0' }}>
                <Container >
                    <Navbar.Brand as={Link} to='/home'>
                        {/* <img src={reactLogo} className="logo react" alt="React logo"/> */}
                        <img src={reactLogo} alt="React logo" className="d-inline-block align-top logo.react:hover" />
                        <Navbar.Text>Test Generator</Navbar.Text>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/features'>Features</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>);
};

export default Header;