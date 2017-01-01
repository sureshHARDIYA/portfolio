import React, { Component } from 'react'
import educations from '../../data/education.js'

class Education extends Component {
  render() {
    return (
      <div className="uk-animation-slide-right">
        <h1>Education</h1>
        <hr className="uk-panel-divider" />
        <div>
          {
            educations.map((education, index) => <div key={index}>
              <div className="uk-button-group">
                <a className="uk-button uk-button-success uk-active uk-button-large" href="#">{education.header}</a>
                <button className="uk-button uk-button-success uk-button-large">{education.year}</button>
              </div>
              <div className="uk-text-large uk-text-bold">{education.title}</div>
              <div>
                {education.university.name}
                <span className="uk-margin-small-left uk-text-muted">{education.university.address}</span>
                <p>{education.university.website}</p>
              </div>
              <div>{education.comment}</div>
              <hr className="uk-panel-divider" />
            </div>)
          }
        </div>
      </div>
    )
  }
}

export default Education
