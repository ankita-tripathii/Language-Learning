  import React from "react";
  import { Outlet, Link } from "react-router-dom";
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Container from "react-bootstrap/Container";
  import Nav from "react-bootstrap/Nav";
  import Navbar from "react-bootstrap/Navbar";
  import NavDropdown from "react-bootstrap/NavDropdown";
  import styles from "./navbar.module.css";
  import AuthForm from "../authform/authform";
  import Managelanguages from "../managelanguages/managelanguages";

  export default function Navbarexample() {
    return (
      <>
         <Navbar expand="lg" className={styles.bgBodyTertiary} sticky="top" >
        <Col lg={1} className={styles.brandstyle}  >
          <Navbar.Brand href="#">
            <img
                src="logo1.png"
                width="100"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col lg={8}>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link  href="/" >Home</Nav.Link>
              <Nav.Link href="/about" >About</Nav.Link>
               <Nav.Link href="/managelanguages" >Manage Languages</Nav.Link>
              <NavDropdown title="languages" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#">Learn Chinese</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Japanese</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Russion</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn French</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn German</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Italian</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Arabic</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Hindi</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Latin</NavDropdown.Item>
                <NavDropdown.Item href="#">Learn Korean</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Col>
          <Col lg={1} >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Nav className="me-auto" >
              <Nav.Link href="/authform" style={{color: 'white'}}>Login</Nav.Link>
            </Nav> 
          </Col>
          </Navbar>   

          <Outlet />
          </>
    );
  }


     

    