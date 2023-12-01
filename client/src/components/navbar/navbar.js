import React, { useState } from 'react';
import { Navbar as Navigation, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ScrollIndicator from '../scrollIndicator/scrollIndicator';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <Navigation bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <NavLink className="nav-link" to="/">
            <Navigation.Brand>StageFinder</Navigation.Brand>
        </NavLink>
        <Navigation.Toggle />
        <Navigation.Collapse>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/myTickets">My Tickets</NavLink>
            <NavLink className="nav-link" to="/artists">Artists</NavLink>
            <NavLink className="nav-link" to="/concerts">Concerts</NavLink>
            <NavLink className="nav-link" to="/venues">Venues</NavLink>
            <NavLink className="nav-link" to="/addConcert">Add Concert</NavLink>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-info" type="submit">Search</Button>
          </Form>
        </Navigation.Collapse>
      </Container>
      <ScrollIndicator/>
    </Navigation>
  );
};

export default Navbar;
