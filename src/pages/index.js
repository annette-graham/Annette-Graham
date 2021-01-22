import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path ='/projects' component={Projects} />
        <Route exact path ='/tech' component={Tech} />
        <Route exact path ='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  </Layout>
)

export default IndexPage
