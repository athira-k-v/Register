import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (







    <div className='a1 w-100  ' style={{backgroundColor:"purple"}}>
        <Navbar expand="lg" >
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home"><i className="fa-solid fa-graduation-cap text-white"></i> <span className='text-white'>Education</span></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className='text-white' href="/">Home</Nav.Link>
            <Nav.Link className='text-white' href="">Services</Nav.Link>
            <Nav.Link className='text-white' href="">About Us</Nav.Link>
            <Nav.Link className='text-white' href="/register">Login</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header


   