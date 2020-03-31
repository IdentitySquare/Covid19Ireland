import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'

import "./map_legend.css"

class MapLegend extends React.Component{
  render(){
    return(
      <Card className="map-legend">
        <Card.Body>
        <Card.Title>
          <h4>Map Legend</h4>
        </Card.Title>
        <Card.Text>
          <Row>
            <Col className="n1">
            </Col>
            <Col className="n2">
            </Col>
            <Col className="n3">
            </Col>
            <Col className="n4">
            </Col>
          </Row>
          <Row>
            <Col>
            <p>Less than 1% </p>
            </Col>
            <Col>
              <p>Less than 5% </p>
            </Col>
            <Col>
              <p>Less than 10% </p>
            </Col>
            <Col>
              <p>More than 50% </p>
            </Col>
          </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MapLegend
