"use client"
import Image from 'next/image';
import React from 'react'
import ImageGallery from './ImageGallery';
import Link from 'next/link';
import project_data from '../../../public/data/project_data';

import { useParams, useRouter } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const {id} = params;
  const data = project_data.filter(data => data._id === Number(id));
  return (
     <div className="container w-full text-white bg_content_dark">
     <div className="flex flex-col justify-center pt-16 md:flex-row">
        
        {data[0].technology_list.map( list => <span key={list} className="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">{list}</span>)}
     </div>
      <div className="flex flex-row justify-center mt-5">
             <Link href={data[0].live_link} className='px-3 py-1 rounded-lg bg-c_primary me-3' >Live Link </Link>
            {data[0].client_link &&  <Link href={data[0].client_link} className='px-3 py-1 rounded-lg bg-c_secondary me-3' >Client Code </Link> }
            {data[0].server_link &&  <Link href={data[0].server_link} className='px-3 py-1 bg-red-500 rounded-lg me-3' >Server Code </Link> }
            {data[0].Github_link &&  <Link href={data[0].Github_link} className='px-3 py-1 bg-red-500 rounded-lg me-3' >Server Code </Link> }
           </div>
       <h1 className="text-center max-w-[550px] mx-auto mt-8 mb-5 text-gray-300">{data[0].name}</h1>
       <div className="flex flex-col self-center mx-auto md:flex-row w-[420px] mb-10">
        <p className="text-gray-300 mt-7 me-5 p_light">Al Riyad Karim</p>
        <Image src='/image/profile.JPG' 
        className='w-16 h-16 rounded-full ring-2 gradient-border'
        alt='project picture ' 
        width={321} height={321} 
        />
        <p className="text-gray-300 mt-7 ps-3 p_light">{data[0].role}</p>
       </div> 
       <p className="mb-4 text-center">{data[0].title}</p>
        
       <div className="grid grid-cols-2 lg:grid-cols-4 border-t-[1px] gradient-border mx-5 px-8 shadow-2xl mb-12 pb-4">
         <div className="flex flex-col">
           <p className='mt-5 mb-2 text-base font-semibold text-c_ternary p_light'>Role</p> 
           <p className="text-gray-300 p_light">{data[0].role}</p> 
         </div>
         <div className="flex flex-col">
           <p className='mt-5 mb-2 text-base font-semibold text-c_ternary p_light'>Role</p> 
           <p className="text-gray-300 p_light">Full Stack Developer</p> 
         </div>
         <div className="flex flex-col">
           <p className='mt-5 mb-2 text-base font-semibold text-c_ternary p_light'>Role</p> 
           <p className="text-gray-300 p_light">Full Stack Developer</p> 
         </div>
         <div className="flex flex-col">
           <p className='mt-5 mb-2 text-base font-semibold text-c_ternary p_light'>Role</p> 
           <p className="text-gray-300 p_light ">Full Stack Developer</p> 
         </div>
       </div> 

       <ImageGallery  images={data[0].image_array} name={data[0].name}/>

       <p className="pb-16 mx-8 mt-10 text-gray-400 p_light"> {data[0].description}</p>

    </div>
  )
}


export default Page;
