import React, { Fragment } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/03-Organisms/Hero/hero';
import Experiments from '../components/03-Organisms/Experiments';
import SEO from "../components/seo"

const IndexPage = () => (
  <Fragment>
    <Layout>
      <svg className="visually-hidden" width="542" height="545"><defs><path d="M381.594 116c22.945-.455 260.643 161.418 273.252 198.586 12.609 37.167-81.77 305.175-104.373 321.312-22.602 16.136-315.155 16.136-337.758 0-22.602-16.137-110.885-301.102-104.373-321.312C114.855 294.375 358.65 116.463 381.594 116z" id="a"/></defs><clipPath id="pentagon"><use fillOpacity=".2" fill="#8D99AE" transform="rotate(-45 147.126 481.288)" xlinkHref="#a" fillRule="evenodd"/></clipPath></svg>
      <SEO title="Home" />
    </Layout>
    <Hero/>
    <Experiments/>
  </Fragment>
)

export default IndexPage
