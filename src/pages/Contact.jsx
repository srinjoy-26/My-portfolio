import { useState } from "react";

const Contact = () => {

    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f87b4dc3-ea4e-4f51-a9c4-def90671b32a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
      
      

      if (data.success) {
        setResult("Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className="h-screen pt-[110px] px-4 md:px-0">
      <div className="text-white text-center">
        <h1 className="text-5xl">CONTACT ME</h1>
        <p className="text-lg">I'll be glad to answer your queries...</p>
      </div>
       <form onSubmit={onSubmit} className="w-full md:w-[30%] flex flex-col gap-5 mx-auto mt-6 p-3 md:p-5 rounded-lg text-white shadow-sm shadow-slate-200">
        <input type="text" name="name" placeholder="Enter name" className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white" required  />
        <input type="email" name="email" placeholder="Enter email" className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white" required />
        <input type="text" name="subject" placeholder="Subject"  className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white" required/>
        <textarea placeholder="Text Message" name="message" className="focus:outline-none bg-slate-500 p-3 rounded-md placeholder:text-white" required></textarea>
        <button type="submit" className="md:w-[40%] bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Send</button>
       </form>

       <div className="text-white text-center pt-4 text-xl font-semibold">
        {result}
       </div>
    </div>
  )
}

export default Contact
