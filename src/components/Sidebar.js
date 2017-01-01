import React from 'react'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Education from './Education/index';
import Skills from './Skills';
import Hobbies from './Hobbies';
import App from './App';
import Contact from './Contact';
import JobHistory from './JobHistory/index'
import NotFound from './NotFound'
import settings from '../data/settings'
import Footer from './Footer'

const routes = [
  { pattern: '/',
    exactly: true,
    main: () => <App />
  },
  { pattern: '/education',
    main: () => <Education />
  },
  { pattern: '/skills',
    main: () => <Skills />
  },
  { pattern: '/jobHistory',
    main: () => <JobHistory />
  },
  { pattern: '/blog',
    main: () => <Skills />
  },
  { pattern: '/hobbies',
    main: () => <Hobbies />
  },
  { pattern: '/contact',
    main: () => <Contact />
  }
]

const Sidebar = ({ history }) => (
  <Router history={history}>
    <div className="uk-grid">
      <aside className="main-sidebar uk-width-medium-1-4 uk-sticky-placeholder">
        <div>
          <div>
            <img src="./images/portfolio.png" alt="Suresh Kumar Mukhiya" width="300"/>
          </div>
          <ul className="uk-nav uk-nav-side uk-nav-parent-icon">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/jobHistory">Job History</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="#">Download Resume</Link></li>
          </ul>
          <div className="tm-footer-links">
            <ul>
              {
                Object.keys(settings.social).map(key => <li key={key}>
                  <a href={settings.social[key]} className={`uk-icon-hover uk-icon-${key}`}></a>
                </li>)
              }
            </ul>
          </div>
        </div>
      </aside>
      <div className="main-content main-scroll uk-flex-item-1 uk-flex uk-flex-column uk-flex-space-between uk-width-medium-3-4">
        {routes.map((route, index) => (
          <Match
            key={index}
            pattern={route.pattern}
            component={route.main}
            exactly={route.exactly}
          />
        ))}
        <Footer />
        <Miss component={NotFound} />
      </div>
    </div>
  </Router>
)

export default Sidebar
