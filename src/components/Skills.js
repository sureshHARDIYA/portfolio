import React from 'react'
import skills from '../data/skill.js'

const Skills = () => <div className="uk-animation-slide-right">
  {skills.map((skill, index) => <div key={index}>
    {skill.name}<br/>
    {skill.link}<br/>
  </div>
  )}
</div>

export default Skills
