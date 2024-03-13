

const Contact = () => {
  return (
    <div className="h-screen pt-[110px] px-4 md:px-0">
      <div className="text-white text-center">
        <h1 className="text-5xl">CONTACT ME</h1>
        <p className="text-lg">I'll be glad to answer your queries...</p>
      </div>
       <div className="form    w-[70%] md:w-[30%] flex flex-col gap-5 mx-auto mt-6 p-3 md:p-5 rounded-lg text-white shadow-sm shadow-slate-200">
        <input type="text" placeholder="Enter name" className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white"  />
        <input type="email" placeholder="Enter email" className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white" />
        <input type="text" placeholder="Subject"  className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white"/>
        <textarea cols={10} rows={3} placeholder="Text Message" className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white"></textarea>
        <button className="md:w-[40%] bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Send</button>
       </div>
    </div>
  )
}

export default Contact
