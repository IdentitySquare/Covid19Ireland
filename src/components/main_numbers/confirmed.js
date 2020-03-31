import React, { useEffect } from 'react'

// Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Confirmed extends React.Component {
  render () {
    const { totalNumberOfCases, newCases } = this.props
    return(
      <Card>
        <Card.Body>
          <Card.Title>Confirmed</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">[+{newCases}]</Card.Subtitle>
          <Card.Text>
            {totalNumberOfCases}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Confirmed
