import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
      <img src="/company_logo.png" alt="company logo" width="50" height="50"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{fontWeight:"bold"}}   href="#about">ABOUT</Nav.Link>
          <Nav.Link  style={{fontWeight:"bold"}}  href="#services">SERVICES</Nav.Link>
          <Nav.Link  style={{fontWeight:"bold"}}  href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link  style={{fontWeight:"bold"}}  href="#pricing">PRICING</Nav.Link>
          <Nav.Link  style={{fontWeight:"bold"}}  href="#contact">CONTACT</Nav.Link>
          <NavDropdown  style={{fontWeight:"bold"}}  title="FAQ" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header