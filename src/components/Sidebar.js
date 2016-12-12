import { Component, PropTypes } from 'react'
import NavLink from './NavLink'
import React from 'react'

export default class Sidebar extends Component {
  static propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    menus: PropTypes.array.isRequired,
    onClick: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]).isRequired,
  }

  state = { open: true }

  handleToggle = (event) => {
    event.preventDefault()
    const to = event.target.dataset.to
    this.setState({ open: to === this.state.open ? false : to })
  }

  render() {
    const { menus, isCollapsed, onClick } = this.props
    const { open } = this.state
    const { handleToggle } = this

    return (
      <aside className="main-sidebar uk-contrast" onClick={onClick} style={{background: '#dadada'}}>
        <ul className="uk-nav uk-nav-side uk-nav-parent-icon">
          {menus.map((menu) => {
            const { to, label, sub } = menu
            const submenu = sub ? (
              <ul className="uk-nav-sub">{sub.map(
                (o) => (
                  <NavLink
                    key={menu.to + o.to}
                    {...o}
                    icon="circle-o"
                  />
                )
              )}
              </ul>
            ) : false
            if (!to) {
              return <li className="uk-nav-header" key={label}>{label}</li>
            }
            const props = {
              ...menu,
              linkClassName: 'uk-nav-side-link',
              onToggle: handleToggle,
              isCollapsible: !isCollapsed,
              collapsed: isCollapsed,
              open: isCollapsed || open === menu.to,
            }

            return (
              <NavLink key={to} {...props}>{submenu}</NavLink>
            )
          })}
        </ul>
      </aside>
    )
  }
}
