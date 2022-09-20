import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import React from "react";

let name = "Mehul";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showError = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const remove = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    remove()
    document.body.classList.add('bg-' + cls)


  }
  return (
    <>
      
        <Navbar title="text utils" mode={mode} toggleMode={toggleMode} aboutText="MyHome" />
        <Alert alert={alert} />
        <div className="container my-3">

              <TextForm mainTitle="Blog by abc " showError={showError} mode={mode} />
              <About />
        </div>
    </>
  );
}

export default App;
