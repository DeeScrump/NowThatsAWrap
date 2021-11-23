import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function NavBar({ currentPage, handlePageChange }) {

    return(
        <Navbar className="navbar-fixed-top container-fluid" bg="dark" variant="dark" expand="md">
            <Navbar.Brand className="brand ms-1"><h2>Now Thats A Wrap</h2></Navbar.Brand>
            <Navbar.Toggle className="me-1" />
            <Navbar.Collapse className="justify-content-center" >
                <Nav> 
                    <Nav.Link className={ currentPage === 'about' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('about')}><h3 className="mx-lg-4">About</h3></Nav.Link>
                    <Nav.Link className={ currentPage === 'menu' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('menu')}><h3 className="mx-lg-4">Menu</h3></Nav.Link>
                    <Nav.Link className={ currentPage === 'events' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('events')}><h3 className="mx-lg-4">Private Events</h3></Nav.Link>
                    <Nav.Link className={ currentPage === 'contact' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('contact')}><h3 className="mx-lg-4">Contact</h3></Nav.Link>            
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;