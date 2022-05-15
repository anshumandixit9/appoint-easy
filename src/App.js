import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/home-components/Home";
import Login from "./components/login/login";
import Register from "./components/login/Register";
function App() {
  return (

    <Router>
      <Home/>
      <Routes>
        <Route path = "/Login" element={<Login/>}/>
        <Route path = "/Register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
