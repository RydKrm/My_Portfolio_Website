import { faBootstrap, faCss3, faFigma, faHtml5, faJs, faReact, faSass, faUikit, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DownSkill, UpSkill } from './SingleSkill'
import { faIcicles, faShapes } from '@fortawesome/free-solid-svg-icons'

const FrontSkill = () => {
  return (
     <div className="mt-16">
            <p className='border-s-2 border-c_ternary ps-4'>Front End Development </p>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-3 "> 
            <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faHtml5} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>HTML 5</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> 
                </div>
              </div>

                <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faCss3} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>CSS 3</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/>
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faSass} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>SASS</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/> <DownSkill/>
                </div>
              </div>
                <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500' src="https://img.icons8.com/carbon-copy/100/tailwind_css.png" alt="tailwind_css"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>TailwindCSS</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
                <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faJs} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>JavaScript</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> 
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500 ' src="https://img.icons8.com/ios/50/typescript.png" alt="typescript"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>TypeScript</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/> <DownSkill/>
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faReact} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>React.js</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/>   
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                {/* <FontAwesomeIcon icon={faC} className='w-8 h-8 text-gray-500' /> */}
                <img width="32" height="32" className='text-gray-500 bg-gray-500 ' src="https://img.icons8.com/ios/50/redux.png" alt="redux"/>
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Redux</p>
                <div className="flex flex-row mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
             
               {/* <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faVuejs} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Vue.js</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div> */}
             
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faBootstrap} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Bootstrap</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/> <DownSkill/>
                </div>
              </div>
            
              
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faUikit} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Material UI</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/><DownSkill/> <DownSkill/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faShapes} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Shadcn UI</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faIcicles} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Daisy UI</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
            
               <div className="flex flex-row justify-between w-56 mb-3">
                <FontAwesomeIcon icon={faFigma} className='w-8 h-8 text-gray-500' />
                <p className='mt-1 text-base font-semibold ms-2 me-6'>Figma</p>
                <div className="flex flex-row content-end mt-2">
                    <UpSkill/> <UpSkill/> <UpSkill/> <UpSkill/> <DownSkill/>
                </div>
              </div>
             
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

export default FrontSkill