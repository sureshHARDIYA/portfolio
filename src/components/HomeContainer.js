import React from 'react'
import { Component, PropTypes } from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'

class Home extends Component {
  render() {
    const {
        pathname,
        children,
      } = this.props
    return (
      <div>
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default Home
