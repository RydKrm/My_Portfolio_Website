import React from 'react'
import FrontEndService from './FrontEndService'
import BackEndService from './BackEndService'
import FullStackService from './FullStackService'

const Service = () => {
  return (
    <div className="container w-full text-white bg_content_dark">

      <h2 className="pt-5 text-center gradient-text"> My Service </h2>
      <div className="flex flex-col"> 
        <FrontEndService />
        <BackEndService />
        <FullStackService />
      </div>
    </div>
  )
}

export default Service