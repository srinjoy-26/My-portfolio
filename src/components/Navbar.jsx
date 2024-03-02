 
 import { LuMenuSquare } from "react-icons/lu";
 import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useState } from "react";
 
 const Navbar = () => {
    let Navitems = ['Home' , 'About' , 'Skills' , 'Projects' , 'Contact']
    let[disp , setdisp] = useState(false)

    disp? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
   return ( 
    <>
    <div id="navbar">
     <div className="bg-transparent flex justify-between items-center  py-4 w-[84%] mx-auto" >
       <div className="pfimg w-16 h-16 rounded-full "></div>
       <div className="nav justify-between gap-8 hidden lg:flex">
        {Navitems.map((x,index) => (
          <p key={index} className="text-white text-lg hover:font-semibold cursor-pointer ease-in duration-200 ">{x}</p>
        ))}
       </div>
       <LuMenuSquare className="lg:hidden text-3xl text-blue-400" onClick={()=>{setdisp(!disp)}}/>
     </div>
    </div>

    <div className={`bg-transparent flex  pt-[130px] w-[84%] mx-auto h-screen ${disp ||'hidden'} `}>
      
       <div className="nav gap-5 flex flex-col">
        {Navitems.map((x,index) => (
          <p key={index} onClick={()=>{setdisp(false)}} className="text-white text-lg hover:font-semibold cursor-pointer flex gap-3 items-center"><FaPersonWalkingArrowRight className="text-blue-400 text-3xl"/>{x}</p>
        ))}
       </div>
       
     </div>
    </>
   )
 }
 
 export default Navbar
 