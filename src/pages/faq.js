import React from "react"

import Header from "../components/Header"
import Advicebar from "../components/advice_bar"

import { Container, Row } from 'react-bootstrap'
import Footer from "../components/footer"

import "../components/main.css"

const Faq = () => (
  <>
    <Header />
    <Advicebar/>
    <Container>
    <Row className="questions">
      <div className="question">
        <h4>Is this an offical website?</h4>
        <p>No, this website just displays current statistics of COVID-19 in Ireland using offical goverment data.</p>
      </div>
      <div className="question">
        <h4>Where do you get the data from?</h4>
        <p>We get the it from the offical goverment data that is released everyday. This website is updated daily as soon as new information is released. </p>
      </div>
    </Row>
    <Footer/>
    </Container>
  </>
)
export default Faq
