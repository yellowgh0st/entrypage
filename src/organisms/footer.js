import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import 'bootstrap/dist/css/bootstrap.css'
import '../atoms/css/core.module.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
  `)

    return (
        <footer>
            <Container>
                <Row>
                    <Col sm='6'>
                        Created by <Link to="/">{ data.site.siteMetadata.title }</Link> © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>.
                    </Col>
                    <Col sm='6'>
                        Contact us <a href="mailto:we@aldana.cz">we@aldana.cz</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
