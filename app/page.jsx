import { faFacebook, faGithub, faJs, faLinkedinIn, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faCode, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="container text-white bg_content_dark ">
   <div className="flex flex-col-reverse md:flex-row">
     <div className="flex flex-col w-1/2 lg:ml-28 lg:mt-32">
      <div className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 -mt-2 text-5xl font-black text-gray-500 me-3"/>
        <h1 className="mb-10 text-white font-[600] leading-5 text-5xl ">Al Riyad Karim </h1>
        <FontAwesomeIcon icon={faMinus} className="w-10 h-10 mt-1 text-xl font-black duration-700 ms-1 me-3 animate-pulse"/>
      </div>
      
      <h1 className="mb-5 mr-5 text-6xl gradient-text">Web Developer <span className="text-5xl text-gray-500">&</span> <br /> Competitive Programmer </h1>
      <p className="mr-20 leading-5 text-gray-400 p_light">Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.</p>
      {/* Social Link */}
      <div className="flex flex-row mt-4 text-white">
        <Link href="/"><FontAwesomeIcon className="w-5 h-5 text-c_secondary hover:text-c_ternary" icon={faLinkedinIn} /></Link>
        <Link href="/"><FontAwesomeIcon className="w-5 h-5 ml-5 text-c_secondary hover:text-c_ternary" icon={faGithub} /></Link>
        <Link href="/"><FontAwesomeIcon className="w-5 h-5 ml-5 text-c_secondary hover:text-c_ternary" icon={faCode} /></Link>
        <Link href=""><FontAwesomeIcon className="w-5 h-5 ml-5 text-c_secondary hover:text-c_ternary" icon={faFacebook} /></Link>
      </div>
     
     {/* experience texts  */}
     <div className="flex flex-col border md:flex-row gradient-border  lg:w-[700px] mt-8 bg_content_dark z-20 pb-6 ">
      <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_primary">34+</h2>
        <p className="mt-3 text-sm">Live Projects</p>
      </div>
      <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_secondary">1+</h2>
        <p className="mt-3 text-sm">Years of Experience</p>
      </div>
      <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_ternary">6</h2>
        <p className="mt-3 text-sm">Open Source Library</p>
      </div>
     </div>
     <div className='relative w-56 mt-10 h-14 bg-gradient-to-t from-c_secondary to-c_ternary'>
    <button className='absolute w-56 font-sans text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 h-14 hover:top-0 hover:left-0'>Download CV</button>
   </div>

     </div>
     <div className="w-1/2 mr-24 lg:mt-20">
      <Image src='/image/profile-image.webp' alt="Profile Image " width={1020} height={1024} className="w-[500px] h-[618px] " />
     </div>
     </div>
     {/* <div className="grid grid-cols-1 pb-16 mt-10 md:grid-cols-2 lg:grid-cols-4 lg:ml-28">
       <h2>Expert List </h2>
       <FontAwesomeIcon className="w-10 h-10 " icon={faReact} />
       <FontAwesomeIcon className="w-10 h-10 " icon={faNodeJs} />
       <FontAwesomeIcon className="w-10 h-10 " icon={faJs} />
     </div> */}
   </div>
  )
}
