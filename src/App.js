
import React, { useState } from 'react';
import './App.css';
import Navvbar from './component/Navvbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import About from './component/About';


import {
  BrowserRouter as Router,
 
  Route,
  
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


const showAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
     }, 2000 );
}




// const removeBodyClasses=()=>{

//    document.body.classList.remove('bg-light')
//    document.body.classList.remove('bg-dark')
//    document.body.classList.remove('bg-warning')
//    document.body.classList.remove('bg-danger')
//    document.body.classList.remove('bg-success')

// }


  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+ cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success")
       }
        else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success")
    }
    
  };

  return (
    <>
    <Router>
    <Navvbar Title='TextUtiles' AboutText='About' mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>   
        <div className='container my-3'>
         <Routes>
            <Route exact path="/about" element={<About   mode={mode} />} />
            <Route exact path="/" element={<Textform alert={alert} heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        
      </div>
    </Router>
    
    </>
  );
}

export default App;

