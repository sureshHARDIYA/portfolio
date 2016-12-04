import React from 'react'
import { PropTypes } from 'react'
import settings from '../data/settings'

const Footer = ({ year }) => {
  const { general } = settings
  return (<footer className="main-footer">
    <div className="uk-flex uk-flex-middle uk-flex-space-between uk-flex-wrap">
      <div className="uk-row-first">
        <strong>
          {`© 2005 - ${year}`} <a href={general.homepage} rel="noopener noreferrer" target="_blank">
            {general.sitename}
          </a>
        </strong> {general.copyright}
      </div>
    </div>
  </footer>)
}
Footer.defaultProps = {
  year: new Date().getUTCFullYear(),
}

Footer.propTypes = {
  year: PropTypes.number.isRequired,
}

export default Footer
