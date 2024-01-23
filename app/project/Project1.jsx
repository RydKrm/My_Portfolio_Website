import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Project1 = () => {
  return (
    <div className='flex flex-col pb-10 border-b border-gray-800 lg:flex-row me-5 md:me-0'>
      <div className="w-full lg:w-1/2">
        <Image src='/image/skills-01.jpg' 
          alt='Project 1 Picture'   
          width={1024}
          height={700}
          className=' w-[650px] lg:w-[570px]  l m-5 h-[380px] hover:h-[365px] hover:w-[565px] transition-all duration-500 mt-10 mb-10'
          /> </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col ms-8">
          <Link href={`/project/${1}`} className='mt-10 mb-4 text-4xl font-medium hover:text-c_ternary'>Crypto website development for DeFi X</Link>
          <p className='text-gray-300 p_light'>The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us.</p>
           <div className="flex flex-row mt-5 mb-3">
             <Link href='/' className='px-3 py-1 rounded-md bg-c_primary me-3' >Live Link </Link>
             <Link href='/' className='px-3 py-1 rounded-md bg-c_secondary me-3' >Client Code </Link>
             <Link href='/' className='px-3 py-1 bg-red-500 rounded-md me-3' >Server Code </Link>
           </div>
          <p className='mt-3 text-base font-semibold text-[#60A5FA]'>Technologies</p>
           <div className="flex flex-col mt-2 md:flex-row">
             <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">next</span>
             <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">typeScript</span>
             <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">MongoDB</span>
             <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">Tailwind CSS</span>
           </div> 
           <div className="flex flex-wrap mt-5">
            <div className="flex flex-col basis-1/2">
              <p className='mt-2 text-base font-semibold text-[#60A5FA]'>Duration</p> 
              <p className="p_light">2 Weeks</p> 
            </div>
            <div className="flex flex-col">
              <p className='mt-2 text-base font-semibold text-[#60A5FA]'>Role</p> 
              <p className="p_light">Full Stack Developer</p> 
            </div>
           </div>
          
        </div>
      </div>
    </div>
  )
}

export default Project1;