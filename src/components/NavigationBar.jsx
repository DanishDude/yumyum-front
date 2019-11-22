import React, { Component } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  /* NavbarBrand,  */
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      isOpen: false,
    }
  }

  toggle = () => { this.setState({ isOpen: !this.state.isOpen }) }

  render() { 
    return ( 
      <div className="NavigationBar">
          <Navbar color="dark" fixed="top" expand="md" >
          <div className="content">
            <NavLink exact to="/">Yumyum</NavLink>
            <NavbarToggler onClick={ this.toggle } className="mr-2" />
            <Collapse isOpen={ this.state.isOpen } navbar>
              <Nav className="ml-auto" navbar>
              <NavItem className="menu-item">
                <NavLink to="/recipes">Recipes</NavLink>
              </NavItem>
              <NavItem className="menu-item">
                <NavLink to="/about-us">About Us</NavLink>
              </NavItem>
              <NavItem className="menu-item">
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem className="menu-item">
                <NavLink to="connected">Connected</NavLink>
              </NavItem>
              </Nav>
            </Collapse>
          </div>
          </Navbar>
      </div>
    );
  }
}
 
export default NavigationBar;