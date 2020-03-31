import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import "./advice_bar.css"

class Advicebar extends React.Component{
  render(){
    return(
      <Navbar className="advice">
        <Container className="d-flex justify-content-center">
          <p className="advice-text">🔒 Ireland is in lockdown. Stay inside and stay safe. </p>
        </Container>
      </Navbar>
    );
  }
}

export default Advicebar
