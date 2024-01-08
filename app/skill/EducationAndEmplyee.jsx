import Link from 'next/link';
import React from 'react'

const EducationAndEmployee = () => {
  return (
    <div className="flex flex-col px-10 pb-20 mt-16 lg:flex-row">
        <div className="w-full lg:w-1/2 me-10">
          <h2 className="pb-3 mt-5 mb-3 border-b-4 text-bold gradient-border">Education</h2>
          <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>University Of Rajshahi</h4>
             <p className='mt-1 text-gray-600 p_light'>2023-Running</p>
          </div>
           <p className='mt-2 text-gray-400 p_light'>MSc in Information & Communication Engineering  </p> 
          </div>
         
          <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>University Of Rajshahi</h4>
             <p className='mt-1 text-gray-600 p_light'>2018-2023</p>
          </div>
           <p className='mt-2 text-gray-400 p_light'>BSc in Information & Communication Engineering  </p> 
          </div>

           <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>Government Belkuchi College </h4>
             <p className='mt-1 text-gray-600 p_light'>2015-2017</p>
          </div>
           <p className='mt-2 text-gray-400 p_light'>HSC in Science </p> 
          </div>
           <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>Enayetpur Islamia High School</h4>
             <p className='mt-1 text-gray-600 p_light'>2010-2015</p>
          </div>
           <p className='mt-2 text-gray-400 p_light'>SSC in Science </p> 
          </div>
          
        </div>
        <div className="w-full lg:w-1/2 ms-6 ps-6">
          <h2 className="pb-3 mt-5 mb-3 border-b-4 text-bold gradient-border"> Online Courses </h2>
          <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>Meta - Coursera</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='-mt-2 text-gray-400 p_light'>Introduction to Front-End Development </p> 
          </div>

           <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>IBM - Coursera</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='-mt-2 text-gray-400 p_light'>Developing Back-End Apps with Node.js & Express </p> 
          </div>

           <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>Hacker Rank</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='-mt-2 text-gray-400 p_light'> Frontend Developer (React) Skills </p> 
          </div>
           <div className="flex flex-col mt-4 mb-8">
            <div className="flex flex-row justify-between">
             <h4 className='mb-1 text-gray-400'>Hacker Rank</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='-mt-2 text-gray-400 p_light'> Software Engineer </p> 
          </div>
        </div>
        
      </div>
  )
}

export default EducationAndEmployee;