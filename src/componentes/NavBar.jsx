import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import CartSideBar from './CartSideBar'

const NavBar = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut=()=>{
    localStorage.setItem('token', '')
    navigate('/login')
  }

  const token=localStorage.getItem('token')

  return (
    <div>
      <Navbar className='bg-primary' expand="lg">
        <Container>
          <Navbar.Brand href="#/" style={{color:'#fff'}}>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/" style={{color:'#fff'}}>Home</Nav.Link>
              <Nav.Link href="#/puchases" style={{color:'#fff'}}>Puchases</Nav.Link>
              
              {
                token ? (
                  <>
                    <Nav.Link as={Button} onClick={logOut} style={{color:'#fff'}}>Log out</Nav.Link>
                    <Nav.Link as={Button} onClick={handleShow} style={{color:'#fff'}}>Cart</Nav.Link>          
                  </>
                ) : (
                  <Nav.Link href="#/login" as={Button} style={{color:'#fff'}}>Login</Nav.Link>
                )
              }    
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartSideBar 
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export default NavBar;