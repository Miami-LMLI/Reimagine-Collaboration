import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    var headerImg = require('../../static/header.png')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Header image={headerImg} />
          <div className="wrapper">
            <h2 className="section-headline">Why wait for the world of tomorrow when it could be the world of today?</h2>
            <p>As a result of a global health crisis, heightened social rights tension, and a polarized political environment, the world faces an uncertain future. This is where 2040 comes into play. Join us in the near future as we take a deep dive into how we can prepare for what the next 20 years will bring as we explore the intersections of technology, social rights, and what it means to be human.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex;