import { useState } from "react"
import { works } from "../Projects"

const Projects = () => {
  let[Proj , setProj] = useState(works)
  return (
    <div className="pt-[120px]">
      <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center gap-3">
        { Proj.map((x,index) => (
           <div className="overflow-hidden rounded-xl w-[480px]" key={index} id="proj-div">
           <div className=" overflow-hidden"><img src={x.img} alt="" className="hover:scale-110 cursor-pointer ease-in-out duration-300" /></div>
         
         <div className="textdiv text-white p-3 flex flex-col gap-3 items-center bg-gradient-to-r from-pink-600 to-blue-900">
           <h1 className="text-xl">{x.name}</h1>
           <p>{x.des}</p>
           <p className="text-lg text-slate-200"><a href={x.link} className="font-semibold text-blue-300">Visit</a></p>
         </div>
         </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects
