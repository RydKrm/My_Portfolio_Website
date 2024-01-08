import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DownSkill, UpSkill } from './SingleSkill'
import {  faFigma, faGithub, faLinux, faNodeJs, faWindows, } from '@fortawesome/free-brands-svg-icons'
import { faFilePowerpoint, faFileWord } from '@fortawesome/free-regular-svg-icons'

const ToolSkill = () => {
  return (
    <div className="mt-16">
            <p className='border-s-2 border-c_ternary ps-4'> Database Skill Development </p>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3 "> 
            <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faLinux} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Linux</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faFigma} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Figma</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faGithub} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'> Github </p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faPhp} className='w-8 h-8 text-gray-500' /> */}
                <img width='32' height='32' className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/adobe-photoshop.png" alt="adobe-photoshop"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>PhotoShop</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/adobe-illustrator.png" alt="adobe-illustrator"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Illustrator</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/ios/50/adobe-xd--v1.png" alt="adobe-xd--v1"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Adobe XD</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faFilePowerpoint} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Powerpoint</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faFileWord} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>MS Word</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faWindows} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Windows</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ToolSkill