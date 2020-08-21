import React from "react"

import Layout from "../components/layout"
import Header from '../components/Header/index.jsx'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Tech from './Tech'
import Contact from './Contact'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <div className="main-body">
      <div className='home'>
        <Home />
      </div>
    </div>
    <About />
    <Projects />
    <Tech />
    <Contact />
  </Layout>
)

export default IndexPage
