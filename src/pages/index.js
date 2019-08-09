import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import Image from "../molecules/image"
import SEO from "../organisms/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Empowering The Stellar Network.</h1>
    <p>To infinity and beyond.</p>
      <p><em>We are about to start the rocket ship soon.</em></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
      {/* <Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
