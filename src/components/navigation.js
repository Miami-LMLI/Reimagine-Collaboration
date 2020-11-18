import React from 'react'
import './navigation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate, faHome } from "@fortawesome/free-solid-svg-icons";

import { Navbar, Nav } from 'react-bootstrap';

export default () => (
  <Navbar collapseOnSelect expand="lg" bg="transparent " variant="light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
        {/* <NavDropdown title="Modules" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Future of Technology</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Future of Social Rights</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Future of Humans</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      </Nav>
      <Nav>
        <Nav.Link href="https://securelb.imodules.com/s/916/16/interior-flah.aspx?sid=916&gid=1&pgid=6010&cid=11236&dids=205.7&bledit=1&appealcode=MIM"><FontAwesomeIcon icon={faDonate} /> Donate</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
