import React from 'react'
import skills from '../data/skill.js'

const Skills = () => <div className="uk-animation-slide-right uk-grid">
  {skills.map((skill, index) =>
    <div  key={index} className="uk-width-medium-1-2 uk-panel uk-panel-box uk-animation-hover  uk-animation-fade">
      {skill.name}<br/>
      {skill.level}<br/>
      {skill.link}<br/>
    </div>
  )}
</div>

export default Skills
