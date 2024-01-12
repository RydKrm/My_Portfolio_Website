import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full border-[1px] lg:w-2/3 border-gray-500 m-5 ms-10 mt-12">
      <p className='pt-5 pb-4 bg-[#27272A] ps-5 p_light text-gray-300'>Contact with us</p>
        <form method="post">
          <div className="grid grid-cols-1 lg:grid-cols-3" >
           <div className="flex items-center mx-2 my-2 mt-3">
            <input type="text" name="first-name" autocomplete="given-name" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]/20 placeholder-gray-400 gradient-border focus:ring-accent-500" placeholder="First name" required /> 
           </div>
           <div className="flex items-center mx-2 my-2 mt-3">
            <input type="text" name="last-name" autocomplete="given-name" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]/20 placeholder-gray-400 gradient-border focus:ring-accent-500" placeholder="Last name" required /> 
           </div>
           <div className="flex items-center mx-2 my-2 mt-3">
            <input type="text" name="email" autocomplete="given-email" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]/20 placeholder-gray-400 gradient-border focus:ring-accent-500" placeholder="Email" required /> 
           </div>
           <div className="flex items-center mx-2 my-2 mt-3">
            <input type="text" name="phone" autocomplete="phone" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]/20 placeholder-gray-400 gradient-border focus:ring-accent-500" placeholder="Phone" required /> 
           </div>
           <div className="flex items-center mx-2 my-2 mt-3">
            <input type="text" name="company-name" autocomplete="company-name" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]/20 placeholder-gray-400 gradient-border focus:ring-accent-500" placeholder="Company name" required /> 
           </div>
           <div className="flex items-center mx-2 my-2 mt-3">
            <input type="text" name="location" autocomplete="given-location" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]/20 placeholder-gray-400 gradient-border focus:ring-accent-500" placeholder="Location" required /> 
           </div>
        </div>
            <p className='pt-5 pb-4 bg-[#27272A] ps-5 p_light text-gray-300 mt-5'>What services do you need for your project? </p>
            <div className="grid grid-cols-1 gap-3 mt-3 text-gray-300 ms-3 lg:grid-cols-3" >
              <div class="flex items-center">
                <input name="project-type[Website Development]" type="checkbox" class="h-6 w-6 border-gray-300 bg-gray-500 text-accent-600 focus:ring-accent-500" value=""/>
                <label class="ml-3 block">MERN Stack Development</label>
              </div>
              <div class="flex items-center">
                <input name="project-type[Website Development]" type="checkbox" class="h-6 w-6 border-gray-300 bg-gray-500 text-accent-600 focus:ring-accent-500" value=""/>
                <label class="ml-3 block">Next.js Web Development </label>
              </div>
              <div class="flex items-center">
                <input name="project-type[Website Development]" type="checkbox" class="h-6 w-6 border-gray-300 bg-gray-500 text-accent-600 focus:ring-accent-500" value=""/>
                <label class="ml-3 block">Develop with PHP, MySQL</label>
              </div>
              <div class="flex items-center">
                <input name="project-type[Website Development]" type="checkbox" class="h-6 w-6 border-gray-300 bg-gray-500 text-accent-600 focus:ring-accent-500" value=""/>
                <label class="ml-3 block">Figma to HTML</label>
              </div>
              <div class="flex items-center">
                <input name="project-type[Website Development]" type="checkbox" class="h-6 w-6 border-gray-300 bg-gray-500 text-accent-600 focus:ring-accent-500" value=""/>
                <label class="ml-3 block">Figma to React.js</label>
              </div>
              <div class="flex items-center">
                <input name="project-type[Website Development]" type="checkbox" class="h-6 w-6 border-gray-300 bg-gray-500 text-accent-600 focus:ring-accent-500" value=""/>
                <label class="ml-3 block">Figma to Vue.js</label>
              </div>
            </div>
            <p className='pt-5 pb-4 bg-[#27272A] ps-5 p_light text-gray-300 mt-5'> Tell me about your project </p>
            <div class="flex items-center mx-4 my-3"> 
                <textarea type="textarea" name="message" class="block w-full border-0 py-3 px-4 border-b bg-[#27272A]  placeholder-[#27272A] gradient-border focus:ring-accent-500" placeholder="Project description" rows="3" spellcheck="false" />
             </div>

             <div className='relative w-48 mt-10 mb-10 h-14 bg-gradient-to-t from-c_secondary to-c_ternary ms-5'>
             <button href="/" className='absolute w-48 pt-1 font-sans text-center text-black transition-all duration-200 bg-white h-14 btn-main -top-2 -left-2 hover:top-0 hover:left-0'>Submit</button>
             </div>
        
        </form>
      
    </div>
  )
}

export default ContactForm