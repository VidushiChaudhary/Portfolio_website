import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import Education from "./assets/Components/Education";
import Skills from "./assets/Components/Skills";
import Project from "./assets/Components/Project";
import Contact from "./assets/Components/Contact";
import Background from "./assets/Components/Background";


function App() {

  return (
     <BrowserRouter>
      <Navbar />
      <Background/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
