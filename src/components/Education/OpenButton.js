import React, { Component } from 'react'
import { Button } from 'uikit-react'

class OpenButton extends Component {
  handleClick = (event) => {
    this.props.onClick(event)
  }
  render() {
    const { handleClick } = this
    return <Button onClick={handleClick}>Open</Button>
  }
}

export default OpenButton
