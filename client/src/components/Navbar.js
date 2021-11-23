import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function NavBar() {

    return(
        <Navbar className="navbar-fixed-top container-fluid" bg="dark" variant="dark" expand="md">
            <Navbar.Brand className="brand ms-1">Now Thats A Wrap</Navbar.Brand>
            <Navbar.Toggle className="me-1" />
            <Navbar.Collapse className="justify-content-center" >
                <Nav> 
                    <Nav.Link className="mx-lg-5">About</Nav.Link>
                    <Nav.Link className="mx-lg-5">Menu</Nav.Link>
                    <Nav.Link className="mx-lg-5">Private Events</Nav.Link>
                    <Nav.Link className="mx-lg-5">Contact</Nav.Link>            
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;