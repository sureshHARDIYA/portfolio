import React from 'react'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="uk-width-medium-1-1 uk-row-first">
        <div className="uk-animation-slide-right">
          <div className="uk-vertical-align uk-text-center">
            <div className="uk-vertical-align-middle uk-width-1-2">
              <h1 className="uk-heading-large">Sample Heading</h1>
              <p className="uk-text-large">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo.</p>
              <div className="uk-button-group">
                <a className="uk-button uk-button-success uk-active uk-button-large" href="#">Link</a>
                <button className="uk-button uk-button-success uk-button-large">Button</button>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
