import React from 'react';
import { Col, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar color="warning">
                <NavbarBrand>
                    SubBuster
                </NavbarBrand>
                <Nav>
                <Col md="2">
                    <NavItem>
                        Home
                    </NavItem>
                </Col>
                <Col md="4">
                    <NavItem>
                        About Us
                    </NavItem>
                </Col>
                <Col md="6">
                    <NavItem>
                        Learn BugBounty
                    </NavItem>
                </Col>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;