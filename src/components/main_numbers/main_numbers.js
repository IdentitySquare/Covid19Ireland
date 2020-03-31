import React from 'react'
import axios from 'axios';

// Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Components
import Confirmed from './confirmed'
import Active from './Active'
import Recovered from './Recovered'
import Deceased from './Deceased'

import MapHeader from "./map_header"

// Styles
import "./main_numbers.css"

class MainNumbers extends React.Component{

  state = {
    results: []
  }

  componentWillMount(){
    this.getData();
  }

  getData = async () => {
    let data = await axios.get("https://gsx2json.com/api?id=1gzGPP2ezOmzcTQ_-ypa_2yAcAT8SyJcsumOou6yNzTc&sheet=1")
    this.setState({ results: data.data.columns });
    console.log(this.state.results);
  };

  render(){
    const stats = this.state.results
    if(!(stats.date === undefined)){
      return(
        <>
        <MapHeader dateUpdated={stats.date[0]}/>
        <Row>
          <Col xs={6} sm={6} md={3} lg={3} className="confirmed">
            <Confirmed totalNumberOfCases={stats.totalnumberofcases[0]} newCases={stats.newcases[0]}/>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} className="active">
            <Active active={stats.active[0]} />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} className="recovered">
            <Recovered totalRecovered={stats.totalrecovered[0]} newRecovered={stats.newrecovered[0]}/>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} className="deceased">
            <Deceased totalNumberOfDeaths={stats.totalnumberofdeaths[0]} newDeaths={stats.deathstoday[0]}/>
          </Col>
          <div className="disclaimer">
            <h2>*</h2><p> Recovered cases is an estimated figure.</p>
          </div>
        </Row>
        </>
      );
    }
    else{
      return(
        <>
        <MapHeader dateUpdated="-"/>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} className="confirmed">
            <Confirmed totalNumberOfCases="-" newCases=""/>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} className="active">
            <Active active="-"/>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} className="recovered">
            <Recovered totalRecovered="-" newRecovered="-"/>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} className="deceased">
            <Deceased totalNumberOfDeaths="-" newDeaths=""/>
          </Col>
          <div className="disclaimer">
            <h2>*</h2><p> Recovered cases is an estimated figure.</p>
          </div>
        </Row>
        </>
      );
    }
  }
}

export default MainNumbers
