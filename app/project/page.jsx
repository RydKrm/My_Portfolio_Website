import React from 'react'
import Project1 from './Project1';
import project_data from '../../public/data/project_data'

const page = () => {
  return (
       <div className="container w-full text-white bg_content_dark">
      <h2 className="pt-5 text-center gradient-text "> Latest Projects </h2>
      <p className="mt-1 mb-5 text-center p_light ">I have transformed ideas into remarkable digital products.</p>
       <div className="flex flex-col"> 
       {
        project_data.map(project => <Project1 key={project._id} project={project}/>)
       }
       </div>
    </div>
  )
}

export default page;