'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 px-8 md:px-24 bg-c_bg_dark">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-bold text-c_secondary hover:text-c_ternary">
          <h1 className='text-4xl gradient-text'>Ryd</h1>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"  >
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
        {/* Large devices navigation links */}
        <div className="hidden md:flex md:space-x-4 ">
          <Link href="/" className="text-c_secondary hover:text-c_ternary">Home</Link>
          <Link href="/competitive" className="text-c_secondary hover:text-c_ternary">Competitive</Link>
          <Link href="/project" className="text-c_secondary hover:text-c_ternary">Projects</Link>
          <Link href="/skill" className="text-c_secondary hover:text-c_ternary">Skills</Link>
          <Link href='/service' className='text-c_secondary hover:text-c_ternary'>Service</Link>
          <Link href='/contact' className='text-c_secondary hover:text-c_ternary'>Contact</Link>
        </div>
      </div>

      {/* Responsive menu for small devices */}
      {menuOpen && (
        <div className="flex flex-col justify-end p-4 md:hidden text-c_secondary hover:text-c_ternary">
          <Link href="/" className="block py-2">Home</Link>
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
