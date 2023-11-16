import React from 'react'
import "../components style/sideBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import home_appliances from "../images/home_appliances.png"
import mobiles from "../images/mobiles.png"
import laptop from "../images/laptop.png"
import clothes from "../images/clothes.png"
import furniture from "../images/furniture.png"
import groceries from "../images/groceries.png"

function SideBar() {
  return (
    <>
    <section className='navbar-two-section'>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Categories</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Categories List
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3 nav-edit">
                  <Nav.Link href="#action1"><span><img src={home_appliances}/></span>Home Appliances</Nav.Link>
                  <Nav.Link href="#action2"><span><img src={mobiles}/></span>Mobiles</Nav.Link>
                  <Nav.Link href="#action2"><span><img src={laptop}/></span>Laptops</Nav.Link>
                  <Nav.Link href="#action2"><span><img src={clothes}/></span>Clothes</Nav.Link>
                  <Nav.Link href="#action2"><span><img src={furniture}/></span>Furniture</Nav.Link>
                  <Nav.Link href="#action2"><span><img src={groceries}/></span>Groceries</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </section>
    </>
  )
}


export default SideBar;