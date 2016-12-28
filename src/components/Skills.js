import React from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import skills from '../data/skill.js'

const Skills = () => <div>
  {skills.map((skill, key) => <div>
    {skill.name}<br/>
    {skill.link}<br/>
  </div>
  )}
</div>

export default Skills
