import React from 'react';
import {  NavDropdown } from 'react-bootstrap';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './nav-bar.css'
import logo from './logo.svg';
function NavBar(){
    return (
            <Navbar dark >
                <div className="container">
                    <NavbarBrand href="/" className="nav" >
                        <img src={logo} height ="60" width="60" alt=''/>
                        {"     "}AppointEasy
                    </NavbarBrand>
                    <div id = "hide">
                        <Nav justify className="justify-content-end "  >
                            <NavItem>
                                <NavLink className="click" href="/home" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="click" href="/">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className='click' href = '/Login'>Login/SignUp</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='click' href = '/profile'>MyProfile</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className='click' href = '/Doc_prof'>Doctor-Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className='dropdown-hide'>
                    <NavDropdown title = "Menu" className='click'>
                        <NavDropdown.Item href="#">Home</NavDropdown.Item>
                        <NavDropdown.Item>AboutUs</NavDropdown.Item>
                        <NavDropdown.Item href = '/Login'>Login/SignUp</NavDropdown.Item>
                        <NavDropdown.Item href = '/profile'>MyProfile</NavDropdown.Item>
                        <NavDropdown.Item href = '/Doc_prof'>Doctor-profile</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                 </div>
            </Navbar>
        )
}

export default NavBar;