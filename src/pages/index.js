import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Heading from '../components/01-Atoms/Typography/Headings';
import Paragraph from "../components/01-Atoms/Typography/Paragraphs/index";
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
