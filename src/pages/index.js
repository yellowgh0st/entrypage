import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import Layout from "../templates/layout"
import Image from "../molecules/image"
import SEO from "../organisms/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1>Empowering The Stellar Network.</h1>
      <p>s</p>
      {/* <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
