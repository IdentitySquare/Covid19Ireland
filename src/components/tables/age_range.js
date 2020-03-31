import React from 'react';
import axios from 'axios';

// Bootstrap
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

import AgeRangeHeader from "./age_range_header"

// Styles
import "./tables.css"

class AgeRange extends React.Component{

  state = {
    results: [],
    date: null,
    total: 0
  }

  componentWillMount(){
    this.getData();
  }

  getData = async () => {
    let data = await axios.get("http://gsx2json.com/api?id=1gzGPP2ezOmzcTQ_-ypa_2yAcAT8SyJcsumOou6yNzTc&sheet=3")
    this.setState({ results: data.data.rows[0] });
    this.setup()
  };

  setup(){

    let stats = this.state.results
    let date = stats.date
    delete stats.date
    let total = stats.total

    this.setState({ results: stats, date: date, total: total});
  }

  getAge(age){
    switch(age) {
    case 'lessthanone': return '<1';
    case 'onetofour': return '1-4';
    case 'fivetofourteen': return '5-14';
    case 'fifteentotwentyfour': return '15-24';
    case 'twentyfivetothirtyfour': return '25-34';
    case 'thirtyfivetofourtyfour': return '35-44';
    case 'fourtyfivetofiftyfour': return '45-54';
    case 'fiftyfivetosixtyfour': return '55-64';
    case 'oversixtyfive': return '65+';
    case 'unknown': return 'Unknown';
    case 'total': return 'Total';
    default: return '-';
    }
  }

  getPercentage(num){
    return ((num/this.state.total) * 100).toFixed(2)
  }

  render(){
    const stats = this.state.results

    if(!(stats===undefined)){
      return(
        <>
        <AgeRangeHeader dateUpdated={this.state.date} />
        <Card className="table">
          <Table hover className="county-cases">
            <thead>
              <tr>
                <th colSpan="2" className="county">Age Range</th>
                <th className="cases">Cases</th>
                <th className="percent">Percentage Of Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(stats).map((age, value) => (
                <tr className = "test">
                  <td colSpan="2">{this.getAge(age)} </td>
                  <td className="cases">{stats[age]}</td>
                  <td className="percent">{this.getPercentage(stats[age])}%</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        </>
      );
    }else{
      return(
        <p>LOADING</p>
      );
    }
  }
}

export default AgeRange
