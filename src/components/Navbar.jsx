 
 import { LuMenuSquare } from "react-icons/lu";
 import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useState } from "react";
 import { Link } from "react-router-dom";
 import { RxCross1 } from "react-icons/rx";

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
         <Link key={index} to={x == 'Home' ? '/' : `/${x.toLowerCase()}`}> <p  className="text-white text-lg hover:font-semibold cursor-pointer ease-in duration-200 ">{x}</p></Link>
        ))}
       </div>
       <LuMenuSquare className={`lg:hidden text-3xl text-blue-400 ${disp && 'hidden'}`} onClick={()=>{setdisp(true)}}/>
       <RxCross1 className={`lg:hidden text-3xl text-blue-400 ${disp || 'hidden'} `} onClick={()=>{setdisp(false)}}/>
     </div>
    </div>

  <div className={`navbar-topbar ${disp ? 'open' : ''}`} id="topbar">
    <div className={` bg-black flex  pt-[130px] h-screen  pl-[55px]` }>
      
       <div className="nav gap-5 flex flex-col">
        {Navitems.map((x,index) => (
         <Link key={index} to={x == 'Home' ? '/' : `/${x.toLowerCase()}`}><p  onClick={()=>{setdisp(false)}} className="text-white text-lg hover:font-semibold cursor-pointer flex gap-3 items-center"><FaPersonWalkingArrowRight className="text-blue-400 text-3xl"/>{x}</p></Link> 
        ))}
       </div>
       
     </div>
     </div>
    </>
   )
 }
 
 export default Navbar
 

