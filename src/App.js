
import './App.css';
import Navbar from './components/Navbar';
import NameBox from './components/NameBox';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Footer from './components/Footer'
import devArt from './assets/dev_art.png'
import { useState } from 'react'
import {motion} from 'framer-motion'
function App() {

  const [lightMode, setLightMode] = useState('dark')
  return (
    <div className={lightMode}>
      <div className='bg-white dark:bg-gray-900'>
      <Navbar lightMode={lightMode} setLightMode={setLightMode}/>
      
      <NameBox/>
      <motion.div
      initial={{opacity:0}}
      transition={{ease:'easeIn', delay:0.2}}
      animate={{opacity:1}}
      >
      <img className='dev-img' src={devArt}/>
      </motion.div>
     <motion.div
     initial={{ opacity: 0 }}
     transition={{ delay: 0.1 }}
     whileInView={{ opacity: 1 }}>
      <Skills/>
      </motion.div>
      <Projects/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
