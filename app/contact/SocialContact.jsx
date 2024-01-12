import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const SocialContact = () => {
  return (
      <div className="w-full lg:w-1/3">
        <div className="flex flex-col pb-12 mt-12 ms-10">
            <h2 className='font-bold' >Get in touch</h2>
            <h2  className="mb-8 font-bold gradient-text">Lets talk about your project</h2>
            <p className='text-gray-400 p_light'>Thinking about a new project, a problem to solve, or just want to connect? Lets do it!</p>
            <p className='mt-5 text-gray-400 p_light'> Use the form on this page or get in touch by other means.</p> 
            <div className="flex flex-row mt-10">
            <FontAwesomeIcon icon={faPhone} className='w-6 h-6 text-gray-500 me-3' />
            <p className='text-gray-300 p_light'>Phone:  +8801732461622</p>
            </div>
            <div className="flex flex-row mt-3">
            <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6 text-gray-500 me-3' />
            <p className='text-gray-300 p_light'>Email:  alriyadkarim@gmail.com </p>
            </div>
            <div className="flex flex-row mt-3">
            <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6 text-gray-500 me-3' />
            <Link href='https://www.linkedin.com/in/alriyadkarim/' className='text-gray-300 p_light'>LinkedIn: Al Riyad Karim</Link>
            </div>
            <div className="flex flex-row mt-3">
            <FontAwesomeIcon icon={faFacebook} className='w-6 h-6 text-gray-500 me-3' />
            <Link href='https://www.facebook.com/riyad.karim.355/' className='text-gray-300 p_light'>Facebook:  Riyad Karim</Link>
            </div>
            <div className="flex flex-row mt-3">
            <FontAwesomeIcon icon={faX} className='w-6 h-6 text-gray-500 me-3' />
            <Link href='https://twitter.com/' className='text-gray-300 p_light'>X:  Riyad karim</Link>
            </div>
        </div>
    </div>
  )
}

export default SocialContact