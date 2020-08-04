import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/03-Organisms/Hero/hero';
import HalfBanner from "../components/03-Organisms/HalfBanner";
import Timeline from "../components/03-Organisms/timeline";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
  </Layout>
)

export default IndexPage
