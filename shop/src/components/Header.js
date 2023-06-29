import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query'; 

function Header() {

  let navigate = useNavigate();

  let result = useQuery(['작명'], () =>
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a) => { return a.data })
  );
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href='#' onClick={() => { navigate('/') }}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown" onClick={() => { navigate('/about') }}>
              <NavDropdown.Item onClick={() => { navigate('member') }}>Member</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => { navigate('/about/location') }}>Location</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className='ms-auto'>Hello {result.isLoading ? '로딩중' : result.data.name}</Nav>
      </Container>
    </Navbar>
  );
};

export default Header;