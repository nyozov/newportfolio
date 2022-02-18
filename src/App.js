
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react'

function App() {

  const [lightMode, setLightMode] = useState('dark')
  return (
    <div className={lightMode}>
      <Navbar lightMode={lightMode} setLightMode={setLightMode}/>
      
    </div>
  );
}

export default App;
