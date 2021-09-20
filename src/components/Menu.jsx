import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap';

function Menu() {
  return (
    <div className='menu'>
      <div className="container">
        <div className="row">
          <Navbar expand="md" className='p-3 menu-desk'>
            <Navbar.Brand href="#">
              <Image src="./img/logo.png" alt='logo' />
            </Navbar.Brand>
            <div className="d-flex menu-box">
              <Form className="d-flex menu-form">
                <FormControl
                  type="search"
                  aria-label="Search"
                  className='border-0 input'
                />
              </Form>
            </div>
              <div variant="outline-secondary" className='border-0 btn-search-menu'>
                <Image className='menu-search-icon-mob' src="./img/search-input-small.svg" />
                <Image className='menu-account-icon-desk' src="./img/account_icon.svg" />
              </div>
            <Navbar.Toggle aria-controls="navbarScroll" className='border-0 p-0' />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100%' }}
              >
                <Nav.Link className='px-4' href="#action1">Discover</Nav.Link>
                <Nav.Link className='px-4' href="#action2">Me Plants</Nav.Link>
                <Nav.Link className='px-4' href="#action2">Diseases</Nav.Link>
                <Nav.Link className='px-4' href="#action2">Blog</Nav.Link>
                <Nav.Link className='px-4' href="#action2">FQA</Nav.Link>
                <Nav.Link className='px-4' href="#action2">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    </div>
  </div>
  );
}

export default Menu;
