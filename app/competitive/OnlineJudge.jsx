import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const OnlineJudge = () => {
  return (
    <div className="w-full mt-5 lg:w-2/3 ms-10 pb-14">
        <div className="flex flex-col mt-10 ">
        <div className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 mt-1 text-5xl font-black text-gray-300 me-1 animate-pulse"/>
       <h2 className="mt-2 gradient-text">Online Journey</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2"> 
         <div className="mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-r from-c_secondary to-c_ternary ps-8" >
              <img width="50" height="50" className='mt-10 mb-2 text-white'  src="https://img.icons8.com/ios/50/stop-squared.png" alt="stop-squared"/>
             <h3><Link href='https://www.stopstalk.com/user/profile/riyadkarim'>StopStalk </Link>  </h3>
             <p >700+ Problem Solve </p>
           </div>
           <div className="w-full bg-white">
            {/* <p className="pt-5 pb-5 mx-5 text-gray-900 p_light">Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute</p> */}
            <ul className='pt-5 pb-10 text-sm font-bold text-black ms-8'>
                <li><p className='font-semibold text-gray-800 p_light'>All Count Here </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>50+ Contest in OJ </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Most Solve in Codeforces </p></li>
            </ul>
           </div>
          </div>
          {/* Codeforces */}
          <div className="mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-r from-c_secondary to-c_ternary ps-8" >
              <img width="50" height="50" className='mt-10 mb-2 text-white' src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo"/>
             <h3><Link href='https://codeforces.com/profile/ryd '>Codeforces </Link>  </h3>
             <p >510+ Problem Solve </p>
           </div>
           <div className="w-full bg-white">
            {/* <p className="pt-5 pb-5 mx-5 text-gray-900 p_light">Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute</p> */}
            <ul className='pt-5 pb-10 text-sm font-bold text-black ms-8'>
                <li><p className='font-semibold text-gray-800 p_light'>Max Rating : Specialist, 1407 </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Current Rating : Newbie, 937 </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>35+ Contest in OJ </p></li>
            </ul>
           </div>
          </div>
          {/* LeetCode */}
          <div className="mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-r from-c_secondary to-c_ternary ps-8" >
              <img width="50" height="50" className='mt-10 mb-2 text-white' src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo"/>
             <h3><Link href='https://leetcode.com/Ryd958/'>LeetCode </Link>  </h3>
             <p >50+ Problem Solve </p>
           </div>
           <div className="w-full bg-white">
            {/* <p className="pt-5 pb-5 mx-5 text-gray-900 p_light">Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute</p> */}
            <ul className='pt-5 pb-10 text-sm font-bold text-black ms-8'>
                <li><p className='font-semibold text-gray-800 p_light'>5+ Contest in OJ </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Contest Rating: 1522 </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Top 35% of All contest </p></li>
                <li><p className='font-semibold text-white p_light'> test </p></li>
                <li><p className='font-semibold text-white p_light'> test </p></li>
            </ul>
           </div>
          </div>

          {/* CodeChef */}
          <div className="mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-r from-c_secondary to-c_ternary ps-8" >
              <img width="50" height="50" className='mt-10 mb-2 text-white' src="https://img.icons8.com/ios/50/codechef.png" alt="codechef"/>
             <h3><Link href='https://www.codechef.com/users/ryd958'> CodeChef </Link>  </h3>
             <p >20+ Problem Solve </p>
           </div>
           <div className="w-full bg-white">
            {/* <p className="pt-5 pb-5 mx-5 text-gray-900 p_light">Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute</p> */}
            <ul className='pt-5 pb-10 text-sm font-bold text-black ms-8'>
                <li><p className='font-semibold text-gray-800 p_light'>Max Rating: 1418 </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>5+ Contest in OJ </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Div 3, 2 Star </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Country Rank: 1285 </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Global Rank: 40643 </p></li>
            </ul>
           </div>
          </div>
          {/* AtCoder */}
          <div className="mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-r from-c_secondary to-c_ternary ps-8" >
              <img width="50" height="50" className='mt-10 mb-2 text-white' src="https://img.icons8.com/external-outline-lafs/64/external-coder-iiot-outline-iconset-outline-lafs.png" alt="external-coder-iiot-outline-iconset-outline-lafs"/>
             <h3><Link href='https://atcoder.jp/users/Ryd958'>Atcoder</Link>  </h3>
             <p >20+ Problem Solve </p>
           </div>
           <div className="w-full bg-white">
            <ul className='pt-5 pb-10 text-sm font-bold text-black ms-8'>
                <li><p className='font-semibold text-gray-800 p_light'>Max Ratting: 131 </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>5+ Contest in OJ </p></li>
                <li><p className='font-semibold text-gray-800 p_light'> Max Position : 8153</p></li>
                <li><p className='font-semibold text-gray-800 p_light'> </p></li>
            </ul>
           </div>
          </div>
          {/* hackerRank */}
          <div className="mt-8 w-80"> 
           <div className="w-full pt-1 pb-5 bg-gradient-to-r from-c_secondary to-c_ternary ps-8" >
              <img width="50" height="50" className='mt-10 mb-2 text-white' src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-regular-tal-revivo.png" alt="external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-regular-tal-revivo"/>
             <h3><Link href='https://www.hackerrank.com/profile/riyadkarimff6'>HackerRank </Link>  </h3>
             <p >20+ Problem Solve </p>
           </div>
           <div className="w-full bg-white">
             <ul className='pt-5 pb-10 text-sm font-bold text-black ms-8'>
                 <li><p className='font-semibold text-gray-800 p_light'>100% First Attempt Success </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>No Contest in OJ </p></li>
                <li><p className='font-semibold text-gray-800 p_light'>Certified in Problem Solve </p></li>
                <li><p className='font-semibold text-gray-800 p_light'> </p></li>
            </ul>
           </div>
          </div>
        </div>
         
        </div>
    </div>
  )
}

export default OnlineJudge