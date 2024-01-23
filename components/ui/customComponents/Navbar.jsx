'use client'
import Link from 'next/link';
import React, { useState } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 px-24 bg-c_bg_dark">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-bold text-c_secondary hover:text-c_ternary ">
          <h1 className='text-4xl gradient-text'>Ryd  </h1> </Link>

        {/* Navbar links (responsive)
        <div className="hidden space-x-4 md:flex text-c_secondary">
          <Link href="#" className=" hover:text-c_ternary">Home</Link>
          <Link href="#" className=" hover:text-c_ternary">About</Link>
          <Link href="#" className=" hover:text-c_ternary">Services</Link>
          <Link href="#" className=" hover:text-c_ternary">Contact</Link>
        </div> */}

        {/* Responsive menu button */}
        <div className="">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive menu (hidden by default) */}
      {menuOpen && (
        <div className="flex flex-col justify-end p-4 text-c_secondary hover:text-c_ternary">
          <Link href="#" className="block py-2">Home</Link>
          <Link href="/competitive" className="block py-2">Competitive</Link>
          <Link href="/project" className="block py-2">Projects</Link>
          <Link href="/skill" className="block py-2">Skills</Link>
          <Link href='/service' className='block py-2'>Service</Link>
          <Link href='/contact' className='block py-2'>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
