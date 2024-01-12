import React from 'react';
import SocialContact from './SocialContact';
import ContactForm from './ContactForm';

const page = () => {
  return (
    <div className="container w-full text-white bg_content_dark">
      <div className="flex flex-col md:flex-row">
        <SocialContact />
        <ContactForm />
      </div>
    </div>    
  )
}

export default page