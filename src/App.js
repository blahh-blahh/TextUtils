import "./App.css";
import Alerts from "./components/Alerts.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Contact from "./components/Contact.js";
import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode, setMyMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode == "light") {
      setMyMode("dark");
      document.body.style.backgroundColor = "rgb(29 49 92)";
      showAlert("Dark Mode enabled", "Yay");
    } else {
      document.body.style.backgroundColor = "white";
      setMyMode("light");
      showAlert("Back to basic", "Bleh");
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
    <>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <Routes>
        <Route exact path="/Contact" element={<Contact mode={mode} />}></Route>
        <Route
          exact
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter Text to analyze "
              mode={mode}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
