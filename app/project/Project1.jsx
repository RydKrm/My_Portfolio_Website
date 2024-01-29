import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Project1 = ({project}) => {
  return (
    <div className='flex flex-col pb-10 border-b border-gray-800 lg:flex-row me-5 md:me-0'>
      <div className="w-full lg:w-1/2">
        <div className="w-[650px] lg:w-[570px]  l m-5 h-[380px] hover:h-[365px] hover:w-[565px] overflow-auto">
        <Image src={project.profile_image}
          alt='Project  Picture'   
          width={1024}
          height={700}
          className='mt-10 mb-10 transition-all duration-500 list-image-none'
          /> 
        </div>
        </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col ms-8">
          {project._id && <Link href={`/project/${project._id}`} className='mt-10 mb-4 text-4xl font-medium hover:text-c_ternary'> {project.name}</Link>}
          <p className='text-gray-300 p_light'>{project.title}</p>
           <div className="flex flex-row mt-5 mb-3">
            {project.live_link &&  <Link href={project.live_link} className='px-3 py-1 rounded-md bg-c_primary me-3' >Live Link </Link> }
             {project.Github_link && <Link href={project.Github_link} className='px-3 py-1 rounded-md bg-c_secondary me-3' >Github Code </Link>}
             {project.client_link && <Link href={project.client_link} className='px-3 py-1 rounded-md bg-c_secondary me-3' >Client Code </Link>}
             {project.server_link && <Link href={project.server_link} className='px-3 py-1 rounded-md bg-c_ternary me-3' >Server Code </Link>}
           </div>
          <p className='mt-3 text-base font-semibold text-[#60A5FA]'>Technologies</p>
           <div className="grid grid-cols-4 mt-2 text-center gap-y-3 md:flex-row">
            {
              project.technology_list.map(tech => <span key={tech} class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2 ">{tech}</span> )
            }
            
          </div> 
           <div className="flex flex-wrap mt-5">
            <div className="flex flex-col basis-1/2">
              <p className='mt-2 text-base font-semibold text-[#60A5FA]'>Duration</p> 
              <p className="p_light">{project.duration}</p> 
            </div>
            <div className="flex flex-col">
              <p className='mt-2 text-base font-semibold text-[#60A5FA]'>Role</p> 
              <p className="p_light">{project.role}</p> 
            </div>
           </div>
          
        </div>
      </div>
    </div>
  )
}

export default Project1;