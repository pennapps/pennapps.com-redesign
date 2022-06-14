import * as React from 'react'
import './organizers.css'
import ApplicationsIntro from './organizers_components/ApplicationsIntro'
import ApplicationsProcess from './organizers_components/ApplicationsProcess'
import ApplicationsCommittees from './organizers_components/ApplicationsCommittees'
import ApplicationsFAQs from './organizers_components/ApplicationsFAQs'

export default function Organizers() {
  return (
    <>
      <div className="nav-bar-placeholder">
        Nav Bar Placeholder
      </div>
      <div className="applications-header-container">
        <div className="applications">
          <h2>Applications are Open!</h2>
          <div>Join the PennApps organizing team today</div>
          <button>LINK</button>
        </div>
        <div className="pictures">
          Illustration or exec pic here
        </div>
      </div>
      <div className="applications-body-container">
        <ApplicationsIntro />
        <ApplicationsProcess />
        <ApplicationsCommittees />
        <ApplicationsFAQs />
      </div>
    </>
  )
}
