import  './App.css'
import Navbar from './components/Navbar'
import Hersection from './components/Hersection'
import Footer from './components/Footer'
import { Routes , Route } from 'react-router-dom'
import Skills from './pages/Skills'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
     
     <div className="overflow-hidden relative" id="main">
      <Navbar/>
       <Routes>
         <Route path='/' element={<Hersection/>}></Route>
         <Route path='/skills' element={<Skills/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/projects' element={<Projects/>}></Route>
       </Routes>
      <Footer/>
     </div>
     </>
  )
}