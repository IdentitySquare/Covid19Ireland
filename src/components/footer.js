import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

import "./footer.css"

class Footer extends React.Component{
  render(){
    return(
      <Container className="footer">
          <h5>This project is <a href="https://opensource.com/open-source-way" target="_blank">open source</a>. Contribute to make this project better! <a href="https://github.com/IdentitySquare/Covid19Ireland" target="_blank">View source code</a>.</h5>
      </Container>
    );
  }
}

export default Footer
