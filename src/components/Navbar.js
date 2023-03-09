import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Knife from './Knife';
import Pistols from './Pistols';
import Rifles from './Rifles';
import Home from "./Home";


function BasicExample() {
  return (
    <Router>
    <Navbar bg="dark" variant= {"dark"} expand="lg">
      <Container>
        <Link as = {Link} to = {"./home"}>
        <img src = {require('./../image/logo002.PNG')} alt= "logo"/>
        </Link>
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/knife"}>軍刀</Nav.Link>
            <Nav.Link as = {Link} to = {"/rifles"}>步槍</Nav.Link>
            <Nav.Link as = {Link} to = {"/pistols"}>手槍</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
    <div>
    <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/knife" element={<Knife/>}/>
            <Route exact path="/rifles" element={<Rifles/>}/>
            <Route exact path="/pistols" element={<Pistols/>}/> 
        </Routes>
    </div>
    </Router>
  );
}

export default BasicExample;