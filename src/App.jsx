import React from "react";
import './App.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Project.jsx'
import Service from './components/Service.jsx'
import { Toaster } from "react-hot-toast";
import Learning from "./components/Learning.jsx";

function App() {

  return (
    
    <div >
       <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Learning />
        <Contact />
        <Footer />
    </div>
  )
}

export default App