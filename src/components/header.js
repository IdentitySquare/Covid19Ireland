import React from 'react'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from "gatsby"

// Styles
import "./header.css"

class Header extends React.Component {
  render () {
    return(
      <Navbar className="topbar align-middle">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
            <img
            alt=""
            src={require('./covidlogo.png')}
            height="40"
            />{' '}
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Link to="/faq" className="links current_page_item ">FAQ</Link>
            <Link to="/helpfullinks" className="links">Helpful Links</Link>
            <a  target="_blank" className="links" href="https://2kmfromhome.com/">2km From Home</a>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header
