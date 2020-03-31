import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Advicebar from "../components/advice_bar"
import Container from 'react-bootstrap/Container'

import "../components/main.css"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header/>
    <Advicebar/>
    <Container>
      <div className="error">
      <h1>NOT FOUND</h1>
      <p>We cant find the page you are looking for.</p>
      </div>
    </Container>
  </>
)

export default NotFoundPage
