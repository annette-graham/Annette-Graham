import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from '../components/Header/index.jsx'
import About from '../components/About'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header 
      className="sticky"
    />
    {/* <About /> */}
    
  </Layout>
)

export default IndexPage
