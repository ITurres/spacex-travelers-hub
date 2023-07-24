import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from '../images/planet.png';
import '../styles/header.css';

const MainHeader = () => (
  <Navbar bg="light" variant="light" expand="md">
    <Container>
      <NavLink to="/" style={{ cursor: 'pointer', textDecoration: 'none' }}>
        <figure className="d-flex align-items-center gap-2">
          <Image src={icon} width="40px" />
          <h1>Space Traveller</h1>
        </figure>
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" style={{ cursor: 'pointer' }} className="nav-link fs-5" activeClassName="active">
            Rockets
          </NavLink>
          <NavLink to="/missions" style={{ cursor: 'pointer' }} className="nav-link fs-5" activeClassName="active">
            Missions
          </NavLink>
          <NavLink to="/profile" style={{ cursor: 'pointer' }} className="nav-link fs-5" activeClassName="active">
            My Profile
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainHeader;
