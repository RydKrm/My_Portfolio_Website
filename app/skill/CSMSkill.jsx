import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DownSkill, UpSkill } from './SingleSkill'
import {  faElementor, faFigma, faGithub, faLinux, faNodeJs, faWindows, faWordpress, } from '@fortawesome/free-brands-svg-icons'
import { faFilePowerpoint, faFileWord } from '@fortawesome/free-regular-svg-icons'

const CMSSkill = () => {
  return (
    <div className="mt-16">
            <p className='border-s-2 border-c_ternary ps-4'> Wordpress  </p>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3 "> 
            <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faWordpress} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Wordpress</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
            </div>
            <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faElementor} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Elemontzor</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
            </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faPhp} className='w-8 h-8 text-gray-500' /> */}
                <img width='32' height='32' className='text-gray-500 bg-gray-500' src="https://img.icons8.com/material-outlined/24/woocommerce.png" alt="woocommerce"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>WooCommerce</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
              
            </div>
          </div>
  )
}

export default CMSSkill