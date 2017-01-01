import React from 'react'
import { Component } from 'react'
import settings from '../data/settings'

class Contact extends Component {
  render() {
    return (
        <div className="uk-animation-slide-right">
          <div className="uk-vertical-align">
            <div className="uk-article">
              <h1 className="uk-article-title">Contact & Meet me</h1>
              <hr className="uk-panel-divider" />
              <p className="uk-text-large">
                I would be happy to talk to you if you need my assistance in your research or whether you need any research discussion about any subjects of my field.
              </p>
              <ul className="uk-list uk-list-striped uk-article-lead">
                {
                  Object.keys(settings.contact).map((key) =>
                    <li>
                      <button className="uk-button uk-button-primary uk-margin-right">
                        <a href={settings.contact[key]} target="_blank"><i className={`uk-icon-${key}`}></i></a>
                      </button>
                      {settings.contact[key]}
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Contact
