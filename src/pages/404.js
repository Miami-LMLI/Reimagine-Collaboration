import React from 'react'
import Layout from '../components/layout'

class NotFound extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">Error 404: Page not found!</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFound;