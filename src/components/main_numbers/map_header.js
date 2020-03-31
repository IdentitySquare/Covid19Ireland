import React from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Styles
import "./map_header.css"

class MapHeader extends React.Component{
  render(){
    const { dateUpdated } = this.props
    return(
      <Row className = "map-header">
        <Col>
          <h3>Lastest Numbers</h3>
          <p className ="last-updated">Last Updated: {dateUpdated}</p>
        </Col>
      </Row>
    );
  }
}

export default MapHeader
