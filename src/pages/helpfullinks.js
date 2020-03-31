import React from "react"

import Header from "../components/Header"
import Advicebar from "../components/advice_bar"

import { Container, Row } from 'react-bootstrap'
import Footer from "../components/footer"

import "../components/main.css"

import { Helmet } from "react-helmet"

const HelpfulLinks = () => (
  <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>COVID19 Ireland | Helpful Links</title>
  </Helmet>
  <Header />
  <Advicebar/>
  <Container>
  <Row className="Links">
      <div className="link">
        <h4>HSE</h4>
        <a href="https://www2.hse.ie/conditions/coronavirus/coronavirus.html">
          https://www2.hse.ie/conditions/coronavirus/coronavirus
        </a>
      </div>

      <div className="link">
        <h4>WHO : COVID-19 Home Page</h4>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
          https://www.who.int/emergencies/diseases/novel-coronavirus-2019
        </a>
      </div>

      <div className="link">
        <h4>CDC</h4>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">
          https://www.cdc.gov/coronavirus/2019-ncov/faq.html
        </a>
      </div>

      <div className="link">
        <h4>COVID-19 Global Tracker</h4>
        <a href="https://coronavirus.thebaselab.com/">
          https://coronavirus.thebaselab.com/
        </a>
      </div>
    </Row>
    <Footer/>
    </Container>
  </>
)
export default HelpfulLinks
