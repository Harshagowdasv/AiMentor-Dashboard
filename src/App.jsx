import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Navbar from './common/Navbar'

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App;