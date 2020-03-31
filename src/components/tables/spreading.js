import React from 'react';
import axios from 'axios';

// Bootstrap
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

import SpreadingHeader from "./spreading_header"

// Styles
import "./tables.css"

class Spreading extends React.Component{

  state = {
    results: []
  }

  componentWillMount(){
    this.getData();
  }

  getData = async () => {
    let data = await axios.get("http://gsx2json.com/api?id=1gzGPP2ezOmzcTQ_-ypa_2yAcAT8SyJcsumOou6yNzTc&sheet=5")
    this.setState({ results: data.data.rows });
    console.log(this.state.results);
  };

  render(){
    const stats = this.state.results[0]

    if(!(stats===undefined)){
      return(
        <>
        <SpreadingHeader dateUpdated={stats.date}/>
        <Card className="table">
          <Table hover className="county-cases">
            <tbody>
              <tr className = "test">
                <td colSpan="2">Community transmission</td>
                <td className="cases">{stats.communitytransmission}</td>
              </tr>
              <tr className = "test">
                <td colSpan="2">Close contact with confirmed case</td>
                <td className="cases">{stats.closecontactwithconfirmedcase}</td>
              </tr>
              <tr className = "test">
                <td colSpan="2">Travel Abroad</td>
                <td className="cases">{stats.travelabroad}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </>
      );
    }else{
      return(
        <>
        <SpreadingHeader/>
        <Card className="table">
          <Table hover className="county-cases">
            <tbody>
              <tr className = "test">
                <td colSpan="2">Community transmission</td>
                <td className="cases">-</td>
              </tr>
              <tr className = "test">
                <td colSpan="2">Close contact with confirmed case</td>
                <td className="cases">-</td>
              </tr>
              <tr className = "test">
                <td colSpan="2">Travel Abroad</td>
                <td className="cases">-</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </>
      );
    }
  }
}

export default Spreading
