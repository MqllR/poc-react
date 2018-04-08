import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <Navbar brand={this.props.title} right>
              <img src={logo} alt="Yep" />
              <NavItem href='get-started.html'>Get Started</NavItem>
              <NavItem href='components.html'>Components</NavItem>
            </Navbar>
        )
    }
}

export default Header
