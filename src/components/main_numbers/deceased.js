import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Deceased extends React.Component {
  render () {
    const { totalNumberOfDeaths, newDeaths } = this.props

    return(
      <Card>
        <Card.Body>
          <Card.Title>Deceased</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">[+{newDeaths}]</Card.Subtitle>
          <Card.Text>
            {totalNumberOfDeaths}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Deceased
