import React from 'react';
//Bootstrap
import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
//Router
import { NavLink } from 'react-router-dom';
//Components
import Search from "./Search"

export default function NavBar() {

  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Calendar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink 
            isActive={(match, location) => {
              if (match && match.url === "/") {
                return true;
              }
              return false;
            }}
              className='nav-link' to={'/'} href="#home">Home
            </NavLink>
            <NavLink className='nav-link' to={'/item-list'} href="#link">Item List</NavLink>
            </Nav>
            <Search />
        </Navbar.Collapse>
       </Navbar>
  );
}
