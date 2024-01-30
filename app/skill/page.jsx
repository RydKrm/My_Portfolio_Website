import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FrontSkill from './FrontSkill'
import BackEndSkill from './BackEndSkill'
import DatabaseSkill from './DatabaeSkill'
import ToolSkill from './ToolSkill'
// import CMSSkill from './CSMSkill'
import EducationAndEmployee from './EducationAndEmplyee'

const Skill = () => {
  return (
    <div className="container text-white bg_content_dark ">
      <div className="flex flex-col md:flex-row">
        <div className="hidden lg:block lg:w-1/3 ">
          <div className="relative skill-image">
            <h2 className='absolute px-8 py-3 top-14 left-10 bg-black/60 '>Specialized Area</h2>
          </div>
      <div className="mx-12 mt-10">
        <h2 className="mt-4 mb-6 gradient-text">About My Full Stack Journey </h2>
        <p className="text-justify  p_light">Dedicated competitive programmer and proficient web developer with a proven track record of solving complex algorithmic challenges and building dynamic web applications. I have a deep understanding of data structures, algorithms, and problem-solving techniques and a solid foundation in front-end and back-end development. Driven by a desire for continuous learning, I am committed to achieving technological advancements while updating my skills to create innovative web applications</p>
      </div>
        </div>
        <div className="w-full lg:w-2/3 ms-10">
          <div className="flex flex-col mt-10 ">
            <div className="flex flex-row">
               <h2 className='text-4xl font-bold'> I am </h2>
            <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 mt-1 text-5xl font-black text-gray-500 me-3"/>
            </div>
            <h2 className="gradient-text">Full Stack Web Developer </h2>
          </div>
          {/* Skill Set Start  */}
         <FrontSkill />
         <BackEndSkill />
         <DatabaseSkill />
         {/* <CMSSkill />  */}
         <ToolSkill />
        </div>
      </div>

      {/* Education and Employment  */}

      <EducationAndEmployee />

    </div>
  )
}

export default Skill