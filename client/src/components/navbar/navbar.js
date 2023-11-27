import { Navbar as Navigation, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Navigation bg="dark" variant="dark" expand="lg">
      <Container to="/">
        <NavLink className="nav-link">
            <Navigation.Brand href="#home">StageFinder</Navigation.Brand>
        </NavLink>
        <Navigation.Toggle aria-controls="basic-navbar-nav" />
        <Navigation.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/myTickets">My Tickets</NavLink>
            <NavLink className="nav-link" to="/artists">Artists</NavLink>
            <NavLink className="nav-link" to="/concerts">Concerts</NavLink>
            <NavLink className="nav-link" to="/venues">Venues</NavLink>
          </Nav>
        </Navigation.Collapse>
      </Container>
    </Navigation>
  );
};

export default Navbar;