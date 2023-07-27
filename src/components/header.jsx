import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from '../images/spacex-logo-short.png';
import '../styles/header.css';

const MainHeader = () => (
  <Navbar bg="light" variant="light" expand="md" className="p-4">
    <Container>
      <NavLink to="/" style={{ cursor: 'pointer', textDecoration: 'none' }}>
        <figure className="d-flex flex-column align-items-center gap-2 m-0">
          <Image src={icon} width="200px" />
        </figure>
      </NavLink>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ color: 'var(--blue)' }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            to="/"
            style={{ cursor: 'pointer' }}
            className="nav-link fs-5 pb-1"
            activeclassname="active"
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            style={{ cursor: 'pointer' }}
            className="nav-link fs-5 pb-1"
            activeclassname="active"
          >
            Missions
          </NavLink>
          <span className="my-profile-link">
            <NavLink
              to="/profile"
              style={{ cursor: 'pointer' }}
              className="nav-link fs-5"
              activeclassname="active"
            >
              My Profile
            </NavLink>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainHeader;
