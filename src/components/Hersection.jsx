import { Link } from "react-router-dom"
 
 const Hersection = () => {
   return (
     <div className="flex justify-around items-center gap-5 px-3 lg:px-0 md:h-[90vh] pt-[100px] relative pb-[90px] md:pb-0" id="herodiv">
     <div className="lg:w-[40%] " id="hero-text">
       <div className="flex flex-col gap-6 justify-center p-4">
         <div className="text-white max-w-fit p-2 bg-gradient-to-r from-[#2b0837] to bg-blue-900 rounded-lg text-xl">Welcome to my Portfolio</div>
         <h1 className="text-white text-7xl font-bold">Hi! I'm Srinjoy</h1>
         <div> <p className="text-slate-200 text-xl" id="homep">Hey there , I'm Srinjoy Pati a 3rd year Btech student , a Web developer ,<br/> proficient with technologies like HTML , CSS , JS , REACT , TAILWIND and familiar with tools like Git , GitHub , MySQL, Postman.</p></div>
         <button className="border-2 border-blue-500 rounded-md py-3 text-xl text-white md:w-[30%] hover:bg-blue-500 transition-all duration-500 ease-in-out"><Link to='/experience'>my Resume</Link></button>
       </div>
     </div>

    
    <div className="img rounded-2xl  shadow-md shadow-blue-500 "></div>
    

    </div>
   )
 }
 
 export default Hersection
 