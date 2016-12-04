import React from 'react'
import classNames from 'classnames'
import Collapse from 'react-collapse'
import Link from 'react-router/Link'
import { PropTypes } from 'react'

const NavLink = ({
  to,
  icon,
  label,
  activeOnlyWhenExact,
  children,
  open = false,
  collapsed,
  linkClassName,
  isCollapsible,
}) => (
  <Link activeOnlyWhenExact={activeOnlyWhenExact} to={to}>{
    ({ isActive, href, onClick }) =>
      <li
        className={classNames('uk-nav-side-item', {
          'uk-active': isActive,
          'uk-parent': children,
          'uk-open': children && (open || isActive) && !collapsed,
        })}
      >
        <a className={linkClassName} href={href} onClick={onClick}>
          <i className={`uk-icon-justify uk-icon-${icon}`} />
          <span className="uk-nav-label">{label}</span>
        </a>
        {children && isCollapsible && (
          <Collapse isOpened={open || isActive}>{children}</Collapse>
        )}
        {!isCollapsible && children}
      </li>
  }
  </Link>
)

NavLink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool,
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  isCollapsible: PropTypes.bool,
  linkClassName: PropTypes.string,
  open: PropTypes.bool,
}

export default NavLink
