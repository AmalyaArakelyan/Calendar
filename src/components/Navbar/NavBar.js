import React from 'react';
//Bootstrap
import { Navbar, Nav} from 'react-bootstrap';
//Router
import { NavLink } from 'react-router-dom';
//Components
import Search from "./Search"

export default function NavBar() {

  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to={'/'} className="navbar-brand" href="#home">Calendar</NavLink>
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
