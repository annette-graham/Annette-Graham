import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from '../components/Header/index.jsx'
import Home from '../components/Home'
import About from '../components/About'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <div className="main-body">
      <div className='home'>
        <Home />
      </div>
      {/* <div className="main-content">
      </div> */}
    </div>
    <About />
    
  </Layout>
)

export default IndexPage
