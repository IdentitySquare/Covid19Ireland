import React from 'react'

// Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Active extends React.Component {
  render () {
    const { active } = this.props

    return(
      <Card>
        <Card.Body>
          <Card.Title>Active</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">[+0]</Card.Subtitle>
          <Card.Text>
            {active}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Active
