import Image from 'next/image';
import React from 'react'
import ImageGallery from './ImageGallery';
import Link from 'next/link';
import project_data from '../../../public/data/project_data';
// import { useRouter } from 'next/navigation';

const page = () => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
     <div className="container w-full text-white bg_content_dark">
     <div className="flex flex-col justify-center pt-16 md:flex-row">
        <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">next</span>
        <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">typeScript</span>
        <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">MongoDB</span>
        <span class="inline-block select-none px-3 py-1 uppercase no-underline bg-c_secondary/10 hover:bg-c_secondary/20 text-c_secondary m-0.5 font-mono text-sm lg:mr-2">Tailwind CSS</span>
     </div>
      <div className="flex flex-row justify-center mt-5">
             <Link href='/' className='px-3 py-1 rounded-lg bg-c_primary me-3' >Live Link </Link>
             <Link href='/' className='px-3 py-1 rounded-lg bg-c_secondary me-3' >Client Code </Link>
             <Link href='/' className='px-3 py-1 bg-red-500 rounded-lg me-3' >Server Code </Link>
           </div>
       <h1 className="text-center max-w-[550px] mx-auto mt-8 mb-5 text-gray-300">Crypto website development for DeFi X</h1>
       <div className="flex flex-col mx-auto md:flex-row w-[420px] mb-10">
        <p className="text-gray-300 mt-7 me-5 p_light">Al Riyad Karim</p>
        <Image src='/image/profile-image.webp' 
        className='w-20 h-20 rounded-full ring-2 gradient-border'
        alt='project picture ' 
        width={321} height={321} 
        />
        <p className="text-gray-300 mt-7 ms-3 p_light">22 November 2023</p>
       </div> 
        
       <div className="grid grid-cols-2 lg:grid-cols-4 border-t-[1px] gradient-border mx-5 px-8 shadow-2xl mb-12 pb-4">
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
           <p className="text-gray-300 p_light">Full Stack Developer</p> 
         </div>
         <div className="flex flex-col">
           <p className='mt-5 mb-2 text-base font-semibold text-c_ternary p_light'>Role</p> 
           <p className="text-gray-300 p_light ">Full Stack Developer</p> 
         </div>
       </div> 

       <ImageGallery />

       <p className="pb-16 mx-8 mt-10 text-gray-400 p_light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore voluptatibus quam veniam ducimus impedit tempora officiis odit vel error saepe ad architecto, beatae hic corrupti quis? Quasi, earum modi.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore voluptatibus quam veniam ducimus impedit tempora officiis odit vel error saepe ad architecto, beatae hic corrupti quis? Quasi, earum modi.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore voluptatibus quam veniam ducimus impedit tempora officiis odit vel error saepe ad architecto, beatae hic corrupti quis? Quasi, earum modi.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore voluptatibus quam veniam ducimus impedit tempora officiis odit vel error saepe ad architecto, beatae hic corrupti quis? Quasi, earum modi.</p>

    </div>
  )
}

export default page;
