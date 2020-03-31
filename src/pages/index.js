import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainNumbers from "../components/main_numbers/main_numbers"
import Advicebar from "../components/advice_bar"
import Spreading from "../components/tables/spreading"
import AgeRange from "../components/tables/age_range"
import Footer from "../components/footer"
import "typeface-roboto";
import "typeface-montserrat";
import Map from "../components/map"
import MapLegend from "../components/map_legend"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <title>COVID19 Ireland</title>
    </Helmet>
    <Header/>
    <Advicebar />
    <Container>
      <Row>
        <Col sm={12} md={12} lg={6}>
          <MainNumbers />
          <Map/>
          <MapLegend />
        </Col>
        <Col sm={12} md={12} lg={6}>
          <AgeRange />
          <Spreading/>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  </>
)

export default IndexPage
