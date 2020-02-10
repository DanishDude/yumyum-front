import React, { useState, Fragment } from "react";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, NavLink } from "reactstrap";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Logout from '../containers/ConnectUser/Logout';
import "./NavBar.scss";

const NavBar = () => {
  const user = useSelector(state => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBar">
      <Navbar expand="md" color="dark" dark fixed="top">
        <NavbarBrand tag={Link} to="/" onClick={toggle} className="mr-auto">
          Yumyum
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="menu-item">
              <NavLink tag={Link} to="/recipes" onClick={toggle}>
                Recipes
              </NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink tag={Link} to="/about-us" onClick={toggle}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem className="menu-item">
              <NavLink tag={Link} to="/contact" onClick={toggle}>
                Contact
              </NavLink>
            </NavItem>
            {user.token !== '' && user !== {}
              ? (<Fragment>
                <NavItem className="menu-item">
                  <NavLink tag={Link} to="/my-recipes" onClick={toggle}>
                    My Recipes
                  </NavLink>
                </NavItem>
                <NavItem className="menu-item">
                  <NavLink tag={Link} to="/my-profile" onClick={toggle}>
                    My Profile
                  </NavLink> 
                </NavItem>
                <Logout toggle={toggle} />
                </Fragment>)
              : (<NavItem className="menu-item">
                  <NavLink tag={Link} to="/Login" onClick={toggle}>
                    Connect
                  </NavLink>
                </NavItem>)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
