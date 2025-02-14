import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/03-Organisms/Hero/hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
  </Layout>
)

export default IndexPage
