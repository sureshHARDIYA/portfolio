import React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Redirect from 'react-router/Redirect'
import Education from './Education/index';
import Skills from './Skills';
import NotFound from './NotFound'

const routes = [
  { pattern: '/',
    exactly: true,
    main: () => <Education />
  },
  { pattern: '/education',
    main: () => <Education />
  },
  { pattern: '/skills',
    main: () => <Skills />
  },
  { pattern: '/jobHistory',
    main: () => <Skills />
  }
]

const Sidebar = ({ history }) => (
  <Router history={history}>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '20%',
        background: '#f0f0f0'
      }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/jobHistory">Job History</Link></li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          <Match
            key={index}
            pattern={route.pattern}
            component={route.main}
            exactly={route.exactly}
          />
        ))}
        <Miss component={NotFound} />
      </div>
    </div>
  </Router>
)

export default Sidebar
