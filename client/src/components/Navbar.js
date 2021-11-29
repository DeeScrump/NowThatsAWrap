import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)

    return(
        <Navbar className="navbar-fixed-top container-fluid" bg="dark" variant="dark" expand="md">
            <Navbar.Brand className="brand ms-1"><h2>Now Thats A Wrap</h2></Navbar.Brand>
            <Navbar.Toggle className="me-1" />
            <Navbar.Collapse className="justify-content-center" >
                <Nav> 

                    <ul className={ click ? 'nav-link active' : 'nav-link' }>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={handleClick}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/menu' className='nav-links' onClick={handleClick}>
                                Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/event' className='nav-links' onClick={handleClick}>
                                Private Events
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/catering' className='nav-links' onClick={handleClick}>
                                Catering Events
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={handleClick}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/vip' className='nav-links' onClick={handleClick}>
                                VIP Members
                            </Link>
                        </li>
                    </ul>
                    {/* <NavLink className={ click === 'about' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageClick('about')}><h3 className="mx-lg-4">About</h3></NavLink>
                    <NavLink className={ click === 'menu' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageClick('menu')}><h3 className="mx-lg-4">Menu</h3></NavLink>
                    <NavLink className={ click === 'events' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageClick('events')}><h3 className="mx-lg-4">Private Events</h3></NavLink>
                    <NavLink className={ click === 'catering' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageClick('catering')}><h3 className="mx-lg-4">Catering Events</h3></NavLink>
                    <NavLink className={ click === 'contact' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageClick('contact')}><h3 className="mx-lg-4">Contact Us</h3></NavLink>            
                    <NavLink className={ click === 'vip' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageClick('vip')}><h3 className="mx-lg-4">VIP Sign Up</h3></NavLink>  */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;


{/* <Navbar className="navbar-fixed-top container-fluid" bg="dark" variant="dark" expand="md">
<Navbar.Brand className="brand ms-1"><h2>Now Thats A Wrap</h2></Navbar.Brand>
<Navbar.Toggle className="me-1" />
<Navbar.Collapse className="justify-content-center" >
    <Nav> 
        <Nav.Link className={ currentPage === 'about' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('about')}><h3 className="mx-lg-4">About</h3></Nav.Link>
        <Nav.Link className={ currentPage === 'menu' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('menu')}><h3 className="mx-lg-4">Menu</h3></Nav.Link>
        <Nav.Link className={ currentPage === 'events' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('events')}><h3 className="mx-lg-4">Private Events</h3></Nav.Link>
        <Nav.Link className={ currentPage === 'catering' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('catering')}><h3 className="mx-lg-4">Catering Events</h3></Nav.Link>
        <Nav.Link className={ currentPage === 'contact' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('contact')}><h3 className="mx-lg-4">Contact Us</h3></Nav.Link>            
        <Nav.Link className={ currentPage === 'vip' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('vip')}><h3 className="mx-lg-4">VIP Sign Up</h3></Nav.Link> 
    </Nav>
</Navbar.Collapse>
</Navbar> */}