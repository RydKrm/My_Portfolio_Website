import React from 'react'
import Project1 from './Project1';

const page = () => {
  return (
       <div className="container w-full text-white bg_content_dark">
      <h2 className="pt-5 text-center gradient-text "> Latest Projects </h2>
      <p className="mt-1 mb-5 text-center p_light ">I have transformed ideas into remarkable digital products.</p>
       <div className="flex flex-col"> 
         <Project1 />
         <Project1 />
         <Project1 />
         <Project1 />
       </div>
    </div>
  )
}

export default page;