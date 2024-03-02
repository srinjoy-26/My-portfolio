import { SiGithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

  let Navitems = ['Home' , 'About' , 'Skills' , 'Projects' , 'Contact']

  return (
    <div className="m-10 ">
       <div className=" p-4  rounded-lg w-[84%] mx-auto " id="footer">

      <div className="bg-transparent flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
      <div className="pfimg w-16 h-16 rounded-full "></div>
      <div className="nav gap-4 flex flex-col">
        {Navitems.map((x,index) => (
          <p key={index} className="text-white text-md hover:font-semibold cursor-pointer ease-in duration-200 ">{x}</p>
        ))}
       </div>

       <div className="flex gap-2 items-center">
         <p className="text-white text-lg">Connect with me -</p>
         <div className="flex gap-2 items-center">
          <a href="https://www.linkedin.com/in/srinjoy-pati-7b14301b7/" target="blank"><CiLinkedin className="text-white text-4xl hover:text-blue-500 cursor-pointer ease-in-out duration-300"/></a>
          <a href="https://www.instagram.com/its_srinjoy_2605/" target="blank"><FaInstagram className="text-white text-3xl hover:text-pink-400 cursor-pointer ease-in-out duration-300"/></a>
          <a href="https://github.com/srinjoy-26" target="blank"><SiGithub className="text-white text-3xl cursor-pointer"/></a>
         </div>
       </div>
       </div>
       
       <div className="text-slate-200 text-center lg:text-right mt-4 lg:mt-2 ">Copyright Srinjoy @2024</div>
    </div>
    
    </div>
    
  )
}

export default Footer
