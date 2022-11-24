import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const runAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg, 
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if(mode === 'dark') {
      setMode("light")
      document.body.style.background = '#f8f9fa';
      runAlert("success", "Dark mode has been disabled !")
      setTimeout(()=>{
        setAlert(null)
      }, 1500)
    } else {
      setMode("dark")
      document.body.style.background = '#343a40'
      runAlert("success", "Dark mode has been enabled !")
      setTimeout(()=>{
        setAlert(null)
      }, 3000)
    }
  }

  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <div style={{height: "40px"}}>
    <Alert alert={alert}/>
     </div>
     <Home mode={mode} showAlert={runAlert}/>
    </>
  );  
}

export default App;