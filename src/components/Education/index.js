import React, { Component } from 'react'
import educations from '../../data/education.js'
import { Modal, Button } from 'uikit-react'
import OpenButton from './OpenButton'

class Education extends Component {
  render() {
    return (
      <div className="uk-animation-slide-right">
        <div className="uk-article">
          <h1 className="uk-article-title">Education</h1>
          <hr className="uk-panel-divider" />
          <div className="uk-article-lead">
            {
              educations.map((education, index) => <div key={index}>
                <div className="uk-button-group">
                  <a className="uk-button uk-button-success uk-active uk-button-large" href="#">{education.header}</a>
                  <button className="uk-button uk-button-success uk-button-large">{education.year}</button>
                </div>
                <div className="uk-text-large uk-text-bold">{education.title}</div>
                <div>
                  <p className="">{education.university.name}
                    <span className="uk-margin-small-left uk-text-muted">{education.university.address}</span>
                  </p>
                  <p>{education.university.website}</p>
                </div>
                <Modal target={<OpenButton />}>
                  <h1>Headline</h1>
                  <div>{education.comment}</div>
                </Modal>
                <hr className="uk-panel-divider" />
              </div>)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Education
