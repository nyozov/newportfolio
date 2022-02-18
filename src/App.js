
import './App.css';
import Navbar from './components/Navbar';
import NameBox from './components/NameBox'
import { useState } from 'react'

function App() {

  const [lightMode, setLightMode] = useState('dark')
  return (
    <div className={lightMode}>
      <Navbar lightMode={lightMode} setLightMode={setLightMode}/>
      <NameBox/>
      
    </div>
  );
}

export default App;
