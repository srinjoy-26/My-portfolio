import { useState } from "react"
import skills from "../Skillimg"

const Skills = () => {
  let[skill , upskill] = useState(skills)
  return (
    <div className="bg-transparent lg:h-[90vh] flex flex-col justify-center items-center pt-[120px]">
      <div className="py-10  w-[90%] mx-auto text-left">
      <h1 className="text-white text-4xl" id="skill">Skills</h1>
      <hr className="w-[120px] border-2 border-white" />
      </div>
     
      <div id="skills" className="text-center">
        <h2 className="text-white text-xl lg:text-3xl mb-3" id="tech2">Tools & Technologies I am familiar with</h2>
        <div className="flex justify-center items-center flex-wrap gap-6 ">
          {skill.map((x , index) => (
             <div key={index} className="flex flex-col items-center gap-2 w-72 p-3 rounded-2xl shadow-md shadow-slate-300 bg-slate-900 hover:scale-105 hover:shadow-blue-300 ease-out duration-300" id="skilldiv">
                 <img src={x.src} className="w-36 h-32"/>
                 <h2 className="text-white font-semibold">{x.name}</h2>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
