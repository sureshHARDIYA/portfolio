import React from 'react'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="uk-width-medium-1-1 uk-row-first">
        <div className="uk-animation-slide-right">
          <div className="uk-cover-background uk-position-relative" style={{ background: './images/placeholder.png' }}>
            <img className="uk-invisible" src="./images/placeholder.png" width="600" height="400" alt="" />
            <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
              <div style={{
                background: '#dadada',
              color: '#fff'}}
              >Bazinga!</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
