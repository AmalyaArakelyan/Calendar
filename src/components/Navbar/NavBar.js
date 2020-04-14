import React from 'react';
//Bootstrap
import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
//Router
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  return (
    <div id="navbar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Calendar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink className='nav-link' to={'/'} href="#home">Home</NavLink>
            <NavLink className='nav-link' to={'/item-list'} href="#link">Item List</NavLink>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
       </Navbar>
    </div>
  );
}
