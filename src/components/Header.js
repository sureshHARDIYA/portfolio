import cx from 'classnames'
import { Component, PropTypes } from 'react'
import { Dropdown } from 'uikit-react'
import Link from 'react-router/Link'
import React from 'react'

class Header extends Component {
  static propTypes = {
  }

  render() {
    return (
      <header className="uk-flex main-header">
        <div className="header-logo">
        </div>
        <nav className="uk-navbar uk-navbar-attached uk-flex-item-1">
          <div className="uk-navbar-content">
            dfdf
          </div>
          <div className="uk-navbar-flip">
            <ul className="uk-navbar-nav">
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
