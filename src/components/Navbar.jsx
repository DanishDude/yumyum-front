import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, /* NavbarBrand,  */NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navebar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => { this.setState({ isOpen: !this.state.isOpen }) }

  render() { 
    return ( 
      <div className="Navebar">
        <Navbar fixed="top" expand="md" >
          <NavLink exact to="/">Yumyum</NavLink>
          <NavbarToggler onClick={ this.toggle } />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <NavItem>
              <NavLink to="/recepies">Recepies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about-us">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
 
export default Navebar;