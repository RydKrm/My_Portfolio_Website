import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DownSkill, UpSkill } from './SingleSkill'
import { faJava, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'

const DatabaseSkill = () => {
  return (
    <div className="mt-16 ">
            <p className='border-s-2 border-c_ternary ps-4'> Database Skill Development </p>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3 "> 
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/mysql.png" alt="mysql"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'> MySQL </p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faPhp} className='w-8 h-8 text-gray-500' /> */}
                <img width='32' height='32' className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/database-options.png" alt="database-options"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>MongoDB</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/graphql.png" alt="graphql"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>GraphQL</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <DownSkill/> <DownSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/database--v1.png" alt="database--v1"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Mongoose</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <DownSkill/> <DownSkill/> <DownSkill/>
                </div>
              </div>
            </div>
          </div>
  )
}

export default DatabaseSkill