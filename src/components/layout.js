import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css'

class Layout extends React.Component {
  render() {
    const { data, children } = this.props

    return (
      <Container>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
        <Navigation />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default function MyLayout(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  )
}

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}