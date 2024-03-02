import { useState } from "react"
import skills from "../Skillimg"

const Skills = () => {
  let[skill , upskill] = useState(skills)
  return (
    <div className="bg-transparent lg:h-[90vh] flex flex-col ;justify-center items-center pt-[120px]">
      <h1>Skills</h1>
      <div id="skills" className="text-center">
        <h2 className="text-white text-3xl mb-3">Tools & Technologies I am familiar with</h2>
        <div className="flex justify-center items-center flex-wrap gap-6 ">
          {skill.map((x , index) => (
             <div key={index} className="flex flex-col items-center gap-2 w-72 p-3 rounded-2xl shadow-md shadow-slate-300 bg-slate-900" id="skilldiv">
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
