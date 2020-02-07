import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return ( 
    <div className="NavBar">
        <Navbar expand="sm" color="dark" dark fixed="top" >
          <NavbarBrand tag={Link} exact to="/" onClick={toggle} className="mr-auto">
            <NavLink className="mr-auto">Yumyum</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2"/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem className="menu-item">
              <NavLink tag={Link} to='/recipes' onClick={toggle}>Recipes</NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink tag={Link} to='/about-us' onClick={toggle}>About Us</NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink tag={Link} to='/contact' onClick={toggle}>Contact</NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink tag={Link} to='/my-recipes' onClick={toggle}>My Account</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
};
 
export default NavBar;
