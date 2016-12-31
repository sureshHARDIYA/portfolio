import React from 'react'
import classNames from 'classnames'
import { Component, PropTypes } from 'react'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Redirect from 'react-router/Redirect'
import Footer from './Footer'
import Sidebar from './Sidebar'

class Home extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    menu: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    isLoading: false,
    menu: [
      { label: 'Home' },
      { to: '/app', icon: 'dashboard', label: 'dashboard', activeOnlyWhenExact: true },
      { to: '/education', icon: 'dashboard', label: 'Education', activeOnlyWhenExact: true },
      { to: '/skills', icon: 'dashboard', label: 'Skills', activeOnlyWhenExact: true },
      { to: '/jobHistory', icon: 'dashboard', label: 'Job History', activeOnlyWhenExact: true },
      { to: '/portfolio', icon: 'dashboard', label: 'Portfolio', activeOnlyWhenExact: true },
      { to: '/reference', icon: 'dashboard', label: 'Reference', activeOnlyWhenExact: true },
      {
        to: '/contact',
        icon: 'envelope',
        label: 'contact',
      },
    ],
  }
  render() {
    const {
        user,
        isLoading,
        pathname,
        menu,
        children,
      } = this.props
    return (
      <div>
        <div className="main uk-flex-item-1 uk-flex">
          <Sidebar
            menus={menu}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
