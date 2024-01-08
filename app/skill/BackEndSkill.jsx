import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DownSkill, UpSkill } from './SingleSkill'
import { faJava, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'

const BackEndSkill = () => {
  return (
    <div className="mt-16">
            <p className='border-s-2 border-c_ternary ps-4'> Back End Development </p>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3 "> 
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faNodeJs} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Node.js</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/color/48/000000/express-js.png" alt="express-js"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'> Express.js </p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faPhp} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>PHP</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faJava} className='w-8 h-8 text-gray-500' />
                <i ></i>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Java</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>C</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/c-plus-plus.png" alt="c-plus-plus"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>C++</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/python.png" alt="python"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Python</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              {/* <div className="flex flex-row mb-3">
                <FontAwesomeIcon icon={faCss3} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>CSS 3</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
               <div className="flex flex-row mb-3">
                <FontAwesomeIcon icon={faSass} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>SASS</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div> */}
               {/* <div className="flex flex-row mb-3">
                <FontAwesomeIcon icon={faReact} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Vue.js</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>    */}
            </div>
          </div>
  )
}

export default BackEndSkill