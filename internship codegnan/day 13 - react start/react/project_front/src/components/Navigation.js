import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css'



function NavScrollExample() {
  return (
    <Navbar sticky="top" bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#"> <img className='logo' src={require('../img/logo.png')} alt='logo'></img> Save Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Navlink' href="./Home">Home</Nav.Link>
            <Nav.Link className='Navlink' href="./About">About</Nav.Link>
            <Nav.Link className='Navlink' href="./Process">Process</Nav.Link>
            <Nav.Link className='Navlink' href="./Comm">Feedback</Nav.Link>
            <Nav.Link className='Navlink' href="./Contact">Donate Food</Nav.Link>
            <Button className='login' href="./Login" variant="success"><span>Admin</span></Button>


          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
