import React from 'react'

// Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import "./main_numbers.css"

class Recovered extends React.Component {
  render () {
    const { totalRecovered, newRecovered } = this.props
    return(
      <Card>
        <Card.Body>
          <Card.Title>Recovered</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">[+{newRecovered}]</Card.Subtitle>
          <Card.Text>
            {totalRecovered}*
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Recovered
