import React from 'react'
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../styles/components/headerStyle.css"


const Header = () => {
    return (
        <> 
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Link className='p-3 linkBtnHome linkBtn' to="/home">Home</Link>
        <Link className='p-3 linkBtnAbout linkBtn' to="/about">About</Link>
        <Link className='p-3 linkBtnServices linkBtn' to="/services">Services</Link>
        <Link className='p-3 linkBtnContact linkBtn' to="/contact">Contact</Link>
        <Link className='p-3 linkBtnBlogs linkBtn' to="/blogs">Blogs</Link>
        <Link className='p-3 linkBtnBlogs linkBtn' to="/ourteamposts">Our Team</Link>
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

{/* Carousel */}


        </>
    )
}

export default React.memo(Header);
