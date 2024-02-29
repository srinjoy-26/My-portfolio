import  './App.css'
import Navbar from './components/Navbar'
import Hersection from './components/Hersection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
     
     <div className="overflow-hidden pb-5 " id="main">
      <Navbar/>
      <Hersection/>
      <Footer/>
     </div>
     </>
  )
}