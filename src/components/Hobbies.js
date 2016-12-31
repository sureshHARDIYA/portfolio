import React from 'react'

import hobbies from '../data/hobbies.js'

const Hobbies = () => <div className="uk-animation-slide-right">
  {hobbies.map((hobby, index) => <div key={index}>
    {hobby.name}<br/>
    {hobby.link}<br/>
  </div>
  )}
</div>

export default Hobbies
