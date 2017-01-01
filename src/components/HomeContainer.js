import React from 'react'
import { Component } from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'

class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default Home
