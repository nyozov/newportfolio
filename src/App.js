
import './App.css';
import Navbar from './components/Navbar';
import NameBox from './components/NameBox';
import Projects from './components/Projects';
import Skills from './components/Skills'
import { useState } from 'react'

function App() {

  const [lightMode, setLightMode] = useState('dark')
  return (
    <div className={lightMode}>
      <Navbar lightMode={lightMode} setLightMode={setLightMode}/>
      <NameBox/>
      <Skills/>
      <Projects/>
      
    </div>
  );
}

export default App;
