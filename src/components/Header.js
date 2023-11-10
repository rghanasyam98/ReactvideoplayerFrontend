import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
  

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration:'none',color:'black',fontSize:'30px'}} >
          <i class="fa-solid fa-video fa-beat text-warning me-4"></i>
           Video Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>


  )
}
