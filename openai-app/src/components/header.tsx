import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand as={Link} to='/home'>Logo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/features'>Features</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>);
};

export default Header;