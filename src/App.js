import "./App.css";
import Alerts from "./components/Alerts.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMyMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const removebg=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls) => {
    removebg();
    if(cls==''){
      if (mode != "light") {
        setMyMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Dark Mode enabled","Yay");
      } 
      else {
        document.body.style.backgroundColor = "rgb(29 49 92)";
        setMyMode("dark");
        showAlert("Back to basic","Bleh");
      }
    }
    else{
    
    document.body.classList.add('bg-'+cls);
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  return (
  <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}/>
        <Routes>
          <Route exact path='/home' element={<TextForm showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
        </Router>
  );
}

export default App;
