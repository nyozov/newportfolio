import "./App.css";
import Navbar from "./components/Navbar";
import NameBox from "./components/NameBox";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Contact";
import devArt from "./assets/dev_art.png";
import About from './components/About';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [lightMode, setLightMode] = useState("dark");
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: 'about', current: false },
    { name: 'Projects', href: 'projects', current: false },
    { name: 'Contact Me', href: 'contact', current: false}
   
  ])

  // persist navigation state on page refresh
  useEffect(()=> {
    const persistedNavigation = localStorage.getItem('navigation')
    if (persistedNavigation) {
      setNavigation(JSON.parse(persistedNavigation))
    }
    

  },[])

  useEffect(()=> {
    localStorage.setItem('navigation', JSON.stringify(navigation))
  })

  return (
    <Router>
      <div className={lightMode}>
        <div className="bg-gray-200 dark:bg-gray-900 min-h-screen">
          <Navbar navigation={navigation} setNavigation={setNavigation} lightMode={lightMode} setLightMode={setLightMode} />

          <Routes>
            <Route
              path="/"
              element={
                <div className='xl:p-4 xl:flex xl:flex-row xl:justify-evenly items-center'>
                  <NameBox navigation={navigation} setNavigation={setNavigation}/>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ ease: "easeIn", delay: 0.2 }}
                    animate={{ opacity: 1 }}
                  >
                    <img className="w-3/5 dev-img mt-2" src={devArt} />
                  </motion.div>
                 
                
                </div>
              }
            />
            <Route path="/about" element={
              <About navigation={navigation} setNavigation={setNavigation}/>
            }/>
            <Route path="/projects" element={
            
              <Projects/>
             
            }/>
             <Route path="/contact" element={
              
              <Footer/>
              
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
