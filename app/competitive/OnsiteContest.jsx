import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const OnsiteContest = () => {
  return (
    <div className="w-full mt-5 ms-10 pb-14">
        <div className="flex flex-col mt-10 ">
        <div className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 mt-1 text-5xl font-black text-gray-300 me-1 animate-pulse"/>
       <h2 className="mt-2 gradient-text">Onsite Journey</h2>
        </div>
        <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 ">
           <div className="flex flex-col mt-4 mb-8 me-8 w-[470px]">
            <div className="flex flex-col justify-between md:flex-row">
             <h4 className='mb-1 text-gray-400'>ACM ICPC 2019</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='pt-5 -mt-2 text-gray-400 p_light md:pt-0 '>ACM ICPC 2019 preliminary Contest <br /> in Dhaka Region </p> 
           {/* <p className='text-gray-400 p_light'>Position 155th among 500+ teams </p>   */}
          </div>
          {/* course 2 */}
            <div className="flex flex-col mt-4 mb-8 me-8 w-[470px]">
            <div className="flex flex-col justify-between md:flex-row">
             <h4 className='mb-1 text-gray-400'>ACM ICPC 2020</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='pt-5 -mt-2 text-gray-400 p_light md:pt-0 '>ACM ICPC 2020 preliminary Contest <br /> in Dhaka Region </p> 
           {/* <p className='text-gray-400 p_light'>Position 155th among 500+ teams </p>  */}
          </div>
          {/* contest 3 */}
           <div className="flex flex-col mt-4 mb-8 w-[470px]">
            <div className="flex flex-col justify-between md:flex-row">
             <h4 className='mb-1 text-gray-400'>ICE Login Battle 2020</h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='pt-5 -mt-2 text-gray-400 p_light md:pt-0'>Inter Department Programming Contest </p>
           <p className='text-gray-400 p_light'>Position 3rd among 45 teams</p>  
          </div>
          {/* contest 4 */}
           <div className="flex flex-col mt-4 mb-8 w-[470px]">
            <div className="flex flex-col justify-between md:flex-row">
             <h4 className='mb-1 text-gray-400 '> RU Programming Contests </h4>
             <div className='relative w-32 h-8 mt-5 bg-gradient-to-t from-c_secondary to-c_ternary'>
             <Link href="/" className='absolute w-32 h-8 pt-1 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 hover:top-0 hover:left-0'>View</Link>
             </div>
          </div>
           <p className='pt-5 -mt-2 text-gray-400 md:pt-0 p_light'>Inter University Programming Contest </p> 
           <p className='text-gray-400 p_light'> Position 15th in 75 Teams </p>  
          </div>
        </div>
     </div>
    </div>
  )
}

export default OnsiteContest