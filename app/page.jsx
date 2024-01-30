import { faFacebook, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faCode, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="container text-white bg_content_dark md:w-full">
   <div className="flex flex-col-reverse md:flex-row">
     <div className="flex flex-col w-full md:w-1/2 lg:ml-20 lg:mt-28 ">
      <div className="flex flex-row">
        <FontAwesomeIcon icon={faChevronRight} className="w-10 h-10 text-5xl font-black text-gray-500 me-3"/>
        <h1 className="mb-10 text-white font-[600] leading-5 text-3xl md:mt-3xl md:text-5xl">Al Riyad Karim </h1>
        <FontAwesomeIcon icon={faMinus} className="w-10 h-10 mt-1 text-xl font-black duration-700 md:mt-5 ms-1 me-3 animate-pulse"/>
      </div>
      
      <h1 className="mb-5 mr-5 text-6xl gradient-text">Web Developer <span className="text-5xl text-gray-500">&</span> <br /> Competitive Programmer </h1>
      <p className="mr-20 leading-5 text-gray-400 p_light">Dedicated competitive programmer and proficient web developer with a proven track record of solving complex algorithmic challenges and building dynamic web applications. I have a deep
understanding of data structures, algorithms, and problem-solving techniques and a solid
foundation in front-end and back-end development. Driven by a desire for continuous learning, I
am committed to achieving technological advancements while updating my skills to create
innovative web applications</p>
      {/* Social Link */}
      <div className="flex flex-row mt-4 text-white">
        <Link href="/"><FontAwesomeIcon className="w-5 h-5 text-c_secondary hover:text-c_ternary" icon={faLinkedinIn} /></Link>
        <Link href="/"><FontAwesomeIcon className="w-5 h-5 ml-5 text-c_secondary hover:text-c_ternary" icon={faGithub} /></Link>
        <Link href="/"><FontAwesomeIcon className="w-5 h-5 ml-5 text-c_secondary hover:text-c_ternary" icon={faCode} /></Link>
        <Link href=""><FontAwesomeIcon className="w-5 h-5 ml-5 text-c_secondary hover:text-c_ternary" icon={faFacebook} /></Link>
      </div>
     
     {/* experience texts  */}
     <div className="flex flex-col border md:flex-row gradient-border lg:w-[700px] mt-8 bg_content_dark z-20 pb-6 ">
      <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_primary">34+</h2>
        <p className="mt-3 text-sm md:mt-1">Live Projects</p>
      </div>
      {/* <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_secondary">1+</h2>
        <p className="mt-3 text-sm md:mt-1">Years of Experience</p>
      </div> */}
      <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_secondary">1</h2>
        <p className="mt-3 text-sm md:mt-1">Open Source Contribution</p>
      </div>
      <div className="flex flex-row mt-4 mr-8 ms-5">
        <h2 className="mr-3 text-5xl font-bold text-c_ternary">600+</h2>
        <p className="mt-3 text-sm md:mt-1">Problem Solve</p>
      </div>
     </div>
     <div className='relative w-56 mt-10 mb-24 h-14 bg-gradient-to-t from-c_secondary to-c_ternary'>
    <Link target="_blank" href='/image/Resume of Riyad Karim.pdf'
            rel="noopener noreferrer" className='absolute w-56 pt-4 font-sans text-center text-black transition-all duration-200 bg-white btn-main -top-2 -left-2 h-14 hover:top-0 hover:left-0'>Download CV</Link>
   </div>

     </div>
     <div className="w-full mb-12 md:mr-12 md:w-1/2 lg:mt-24 md:mb-0">
      <Image src='/image/profile.JPG' alt="Profile Image " width={1020} height={1024} className="w-[450px] h-[575px] rounded-md" />
     </div>
     </div>
     
   </div>
  )
}
