import React from 'react'

const page = () => {
  return (
    <div className='pb-20 pl-20 mt-16 text-white ml-36 bg-c_bg_dark'>
     <h1 className='my-5 gradient-text'>Web Developer & Growth Consultant </h1>
     <h2>This is H2 </h2>
     <h3> This is H3 </h3>
     <h4> This is H4 </h4>
     <h5>This is H5 </h5>
     <h6>This is H6 </h6>
     <p className="p-normal">This is normal paragraph </p>
     <p className="p_light">This is light paragraph </p>
     <p className="p_bold">This is bold Paragraph </p>
     <p className="tag_text"> Next.js</p>
   
   <p className="border-light">This is Border light</p>
   <p className="border-bold">This is border bold </p>
   <div className="p-4 text-3xl border_light">
    Testing Border
   </div>
   <div className='relative w-56 h-14 bg-gradient-to-t from-c_secondary to-c_ternary'>
    <button className='absolute w-56 font-sans text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 h-14 hover:top-0 hover:left-0'>Download CV</button>
   </div>
     
    </div>
  )
}

export default page;