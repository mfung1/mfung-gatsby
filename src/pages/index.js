import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/03-Organisms/Hero/hero';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading level="h1" text="Hello World"/>
    <Paragraph level="t1" text="This is a test paragraph."/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
