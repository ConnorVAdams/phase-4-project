import { Navbar as Navigation, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import ScrollIndicator from '../scrollIndicator/scrollIndicator';

const Navbar = () => {
  return (
    <Navigation bg="dark" variant="dark" expand="lg" sticky="top">
      <Container to="/">
        <NavLink className="nav-link">
            <Navigation.Brand>StageFinder</Navigation.Brand>
        </NavLink>
        <Navigation.Toggle />
        <Navigation.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/myTickets">My Tickets</NavLink>
            <NavLink className="nav-link" to="/artists">Artists</NavLink>
            <NavLink className="nav-link" to="/concerts">Concerts</NavLink>
            <NavLink className="nav-link" to="/venues">Venues</NavLink>
            <NavLink className="nav-link" to="/addConcert">Add Concert</NavLink>
          </Nav>
        </Navigation.Collapse>
      </Container>
      <ScrollIndicator/>
    </Navigation>
  );
};

export default Navbar;