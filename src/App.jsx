import  './App.css'
import Navbar from './components/Navbar'
import Hersection from './components/Hersection'
import Footer from './components/Footer'
import { Routes , Route } from 'react-router-dom'

export default function App() {
  return (
    <>
     
     <div className="overflow-hidden relative" id="main">
      <Navbar/>
       <Routes>
         <Route path='/' element={<Hersection/>}></Route>
       </Routes>
      <Footer/>
     </div>
     </>
  )
}