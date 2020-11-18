import React from 'react'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
