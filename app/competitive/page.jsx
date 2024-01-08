import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CompetitiveJourney from './CompetitiveJourney'
import OnlineJudge from './OnlineJudge'
import OnsiteContest from './OnsiteContest'

const Competitive = () => {
  return (
        <div className="container w-full text-white bg_content_dark">
      <div className="flex flex-col-reverse md:flex-row">
       <CompetitiveJourney />
       <OnlineJudge />
      </div>
      <OnsiteContest/>
    </div>
  )
}

export default Competitive