import { faFigma, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const FrontEndService = () => {
  return (
    <div className="flex flex-col pb-12 mt-8 ms-8">
      <div className="flex flex-row lg:ms-14">
      <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 mt-1 text-5xl font-black text-gray-300 me-1 animate-pulse"/>
      <h5 className="mt-2 ">Front End Service </h5>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:ms-16"> 
      {/* Front End Service  */}
      <div className="pb-8 mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-t from-c_secondary to-c_primary ps-8 front-service-1">
              {/* <img width="50" height="50" className='mt-10 mb-2 text-white'  src="https://img.icons8.com/ios/50/stop-squared.png" alt="stop-squared"/> */}
              <FontAwesomeIcon icon={faFigma} className='mt-10 mb-2 text-white w-11 h-11'  />
             <h5> Figma to HTML </h5>
             <p className='p_light'> Using CSS3, Tailwind CSS, SASS, </p>
           </div>
           <div className="w-full pb-8 bg-white">
            {/* <p className="pt-5 pb-5 mx-5 text-gray-900 p_light">Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute</p> */}
            {/* <ul className='pt-2 pb-5 text-sm font-bold text-black ms-8'>
                <li><p className='font-semibold text-gray-800 p_light'>Responsive to all Device </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Pixel Perfect Design </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Eye Catching Design  </p></li>
            </ul> */}
            <p className="pt-2 pb-5 mx-4 text-sm leading-6 text-gray-600"> Convert your figma or PSD to website using HTML5, CSS3, Tailwind CSS, SASS. The design will be Responsive to all device, Pixel Perfect, Eye Catching, Cross-Browser Compatible,
            Well Commented Code,Jquery Effects (Slider, Modal etc),
            CSS Animation      </p>
            <Link href="/" className='px-5 py-2 mt-2 mb-3 text-gray-700 transition-all duration-300 border rounded-md ms-4 gradient-border hover:bg-gradient-to-r hover:from-c_primary hover:to-c_secondary hover:text-white hover:border-0'>Order Now </Link> 
           </div>
          </div>
          {/* Service 2  */}
        <div className="pb-8 mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-t from-c_secondary to-c_primary ps-8 front-service-2 ">
              <FontAwesomeIcon icon={faReact} className='mt-10 mb-2 text-white w-11 h-11'  />
             <h5> Figma to React </h5>
             <p className='p_light'> Using TypeScript, Tailwind CSS, SASS, Firebase </p>
           </div>
           <div className="w-full pb-8 bg-white">
            <p className="pt-2 pb-5 mx-4 text-sm leading-6 text-gray-600"> Convert your Figma or PSD to website using HTML5, CSS3, Tailwind CSS, SASS, TypeScript, Firebase, Animation,. The design will be Responsive to all device, Pixel Perfect, Eye Catching, Cross-Browser Compatible 
            Well Commented Code. </p>
            <Link href="/" className='px-5 py-2 mt-2 mb-3 text-gray-700 transition-all duration-300 border rounded-md ms-4 gradient-border hover:bg-gradient-to-r hover:from-c_primary hover:to-c_secondary hover:text-white hover:border-0'>Order Now </Link> 
           </div>
          </div>
          {/* Service 3 */}
       <div className="pb-8 mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-t from-c_secondary to-c_primary ps-8 front-service-3 ">
              <FontAwesomeIcon icon={faVuejs} className='mt-10 mb-2 text-white w-11 h-11'  />
             <h5> Figma to Vue.js </h5>
             <p className='p_light'> Using Tailwind CSS, SASS, Firebase </p>
           </div>
           <div className="w-full pb-8 bg-white">
            <p className="pt-2 pb-5 mx-4 text-sm leading-6 text-gray-600"> Convert your Figma or PSD to website using HTML5, CSS3, Tailwind CSS, SASS,  Firebase Authentication, Animation. The design will be Responsive to all device, Pixel Perfect,  Cross-Browser Compatible 
            Well Commented Code. </p>
            <Link href="/" className='px-5 py-2 mt-2 mb-3 text-gray-700 transition-all duration-300 border rounded-md ms-4 gradient-border hover:bg-gradient-to-r hover:from-c_primary hover:to-c_secondary hover:text-white hover:border-0'>Order Now </Link> 
           </div>
          </div>
      </div>
    </div>
    
  )
}

export default FrontEndService;