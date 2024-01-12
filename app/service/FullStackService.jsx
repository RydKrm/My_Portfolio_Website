import { faNode, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const FullStackService = () => {
  return (
     <div className="flex flex-col mt-4 ms-8 pb-36">
      <div className="flex flex-row lg:ms-14">
      <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 mt-1 text-5xl font-black text-gray-300 me-1 animate-pulse"/>
      <h5 className="mt-2 uppercase">Full Stack Service </h5>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:ms-16"> 
     
          {/* Service 1  */}
        <div className="pb-8 mt-8 w-80"> 
           <div className="w-full pt-1 bg-gradient-to-t from-c_secondary to-c_primary ps-8 back-service-1">
              <FontAwesomeIcon icon={faNode} className='mt-10 mb-2 text-white w-11 h-11'  />
             <h5> MERN Stack Development  </h5>
             <p className='mb-2 p_light'> With React.js, Node.js, Express.js, MongoDB, Tailwind CSS , Firebase, TypeScript </p>
           </div>
           <div className="w-full pb-8 bg-white">
            <p className="pt-2 pb-5 mx-4 text-gray-600 p_light"> Develop a full stack website with MERN Stack. It will be highly secure, fast loading, user friendly, Front end will be design with React.js, Tailwind CSS, UI Library, Animation. While Backend will be develop using Node.js, Express.js, MongoDB.    </p>
            <Link href="/" className='px-5 py-2 mt-2 mb-3 text-gray-700 transition-all duration-300 border rounded-md ms-4 gradient-border hover:bg-gradient-to-r hover:from-c_primary hover:to-c_secondary hover:text-white hover:border-0'>Order Now </Link> 
           </div>
          </div>
          {/* Service 2 */} 
          <div className="pb-8 mt-8 w-80"> 
           <div className="w-full pt-1 bg-gradient-to-t from-c_secondary to-c_primary ps-8 back-service-2">
              <FontAwesomeIcon icon={faNode} className='mt-10 mb-2 text-white w-11 h-11'  />
             <h5> Web Development With Next.js   </h5>
             <p className='mb-2 p_light'> With Next.js, TypeScript, Tailwind CSS , Firebase</p>
           </div>
           <div className="w-full pb-8 bg-white">
            <p className="pt-2 pb-5 mx-4 text-gray-600 p_light"> Develop a full stack website with Next.js Framework. It will be highly secure, fast loading, user friendly. Website will be develop using Next.js framework with TypeScript, Tailwind CSS, Firebase Authentication, Node.js Express.js Server </p>
            <Link href="/" className='px-5 py-2 mt-2 mb-3 text-gray-700 transition-all duration-300 border rounded-md ms-4 gradient-border hover:bg-gradient-to-r hover:from-c_primary hover:to-c_secondary hover:text-white hover:border-0'>Order Now </Link> 
           </div>
          </div>
          {/* Service 3  */}
      <div className="pb-8 mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-t from-c_secondary to-c_primary ps-8 back-service-1">
              {/* <img width="50" height="50" className='mt-10 mb-2 text-white'  src="https://img.icons8.com/ios/50/stop-squared.png" alt="stop-squared"/> */}
              <FontAwesomeIcon icon={faPhp} className='mt-10 mb-2 text-white w-11 h-11'  />
             <h5> Web Design and Development </h5>
             <p className='p_light'> Using PHP, MySQL, React.js  </p>
           </div>
           <div className="w-full pb-8 bg-white">
           <p className="pt-2 pb-5 mx-4 text-gray-600 p_light"> Front end will be design with React.js, Tailwind CSS, SASS. And Backend design with PHP, MySQL as a RESTApi. It is also a client server paradigm react.js client will talk to PHP, MySQL server.  It will be highly secure, fast loading, user friendly.  </p>
            <Link href="/" className='px-5 py-2 mt-2 mb-3 text-gray-700 transition-all duration-300 border rounded-md ms-4 gradient-border hover:bg-gradient-to-r hover:from-c_primary hover:to-c_secondary hover:text-white hover:border-0'>Order Now </Link> 
           </div>
          </div>
      </div>
    </div>
  )
}

export default FullStackService