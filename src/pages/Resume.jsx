
import { useState } from "react"
import { Education } from "../Resume"
import { Experience } from "../Resume"
import { Por } from "../Resume"

const Resume = () => {
  let [studydata , setstudydata] = useState(Education)
  let [exp , setexp] = useState(Experience)
  return (
    <>
<div className="flex flex-col md:flex-row justify-center ">
  <div className=" pt-[140px] md:pl-2">
    <h1 className="text-white text-2xl font-semibold  text-right md:w-[85%] pr-2 md:pr-0 ">Education</h1>
    <div className="w-full md:w-[80%]  relative " id="timeline">
      {studydata.map((x , index) => (
        <div className="container  p-2 md:p-5 w-[80%] md:w-full rounded-xl relative" key={index}>
        <img src={x.Image} className="h-10 w-10 bg-white rounded-full absolute top-12 right-[-23px]"/>
      
        <div className="text bg-gradient-to-r from-[#F8FAE5] to-[#F3F8FF] p-3 rounded-xl">
          <h1 className="text-xl md:text-2xl font-semibold">{x.name}</h1>
          <small className="font-semibold text-lg text-slate-500">{x.duration}</small>
          <p className="text-lg">{x.des}</p>
        </div>
      </div>
      ))}
     </div>
  
      
  
      <h1 className="text-white text-2xl font-semibold text-right md:w-[85%] pr-2 md:pr-0 ">Experience</h1>
      <div className="w-full md:w-[80%] relative" id="timeline">
      {exp.map((x , index) => (
        <div className="container  p-2 md:p-5 w-[80%] md:w-full rounded-xl relative" key={index}>
        <img src={x.Image} className="h-10 w-10 bg-black rounded-full absolute top-12 right-[-23px]"/>
        
        <div className="text bg-gradient-to-r from-[#FAF6F0] to-[#FFD28F] p-3 rounded-xl">
          <h1 className=" text-xl md:text-2xl font-semibold ">{`${x.name} (${x.company})`}</h1>
          <small className="font-semibold text-lg text-slate-500">{x.duration}</small>
          <p className="text-lg">{x.des}</p>
        </div>
      </div>
      ))}
      </div>
  </div>
  
  <div className="md:pt-[140px] ">
  <h1 className="text-white text-2xl  font-semibold text-right md:w-[85%] pr-2 md:pr-0 ">Positions of responsibility</h1>
  <div className="w-full md:w-[80%] relative" id="timeline">
      {Por.map((x , index) => (
        <div className="container  p-2 md:p-5 w-[80%] md:w-full rounded-xl relative" key={index}>
        <img src={x.Image} className="h-10 w-10 bg-white rounded-full absolute top-12 right-[-23px]"/>
        
        <div className="text bg-gradient-to-r from-[#E6B9DE] to-[#EEF5FF] p-3 rounded-xl">
          <h1 className=" text-xl md:text-2xl font-semibold">{`${x.name} (${x.company})`}</h1>
          <small className="font-semibold text-lg text-slate-500">{x.duration}</small>
          <p className="text-lg">{x.des}</p>
        </div>
      </div>
      ))}
      </div>
      </div>
</div>
    </>
  )
}

export default Resume
