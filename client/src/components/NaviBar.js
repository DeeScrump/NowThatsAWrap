import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function NavBar() {
    const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)

    return(
        <Navbar className="navbar-fixed-top container-fluid" bg="dark" variant="dark" expand="md">
            <Navbar.Brand className="brand ms-1"><h2>Now Thats A Wrap</h2></Navbar.Brand>
            <Navbar.Toggle className="me-1" />
            <Navbar.Collapse className="justify-content-end" >
                <Nav> 
                    <ul className='d-flex justify-content-end align-items-end m-0'>
                        <li className='nav-link px-2 pb-0'>
                            <Link to='/About' className='nav-link' onClick={handleClick}>
                                About
                            </Link>
                        </li>
                        <li className='nav-link px-2 pb-0
                        '>
                            <Link to='/Menu' className='nav-link' onClick={handleClick}>
                                Menu
                            </Link>
                        </li>
                        <li className='nav-link px-2 pb-0
                        '>
                            <Link to='/Online' className='nav-link' onClick={handleClick}>
                                Online Orders
                            </Link>
                        </li>
                        <li className='nav-link px-2 pb-0
                        '>
                            <Link to='/Events' className='nav-link' onClick={handleClick}>
                                Private Events
                            </Link>
                        </li>
                        <li className='nav-link px-2 pb-0
                        '>
                            <Link to='/Catering' className='nav-link' onClick={handleClick}>
                                Catering Events
                            </Link>
                        </li>
                        <li className='nav-link px-2 pb-0
                        '>
                            <Link to='/Contact' className='nav-link' onClick={handleClick}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='nav-link px-2 pb-0
                        '>
                            <Link to='/Vip' className='nav-link' onClick={handleClick}>
                                VIP Members
                            </Link>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;