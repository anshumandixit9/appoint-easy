import React from "react";
import NavBar from "./components/home-components/nav-bar";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/home-components/Home";
import Login from "./components/login/login";
import Register from "./components/login/Register";
import Mystatus from "./components/profile/user-profile";
import Doc_prof from "./components/profile/Doc_prof";
import Aboutus from "./components/AboutUs/about-us";
import Footer from "./components/home-components/Footer";
import Doctor from "./components/home-components/list-doctors"
function App() {
  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/Login" element={<Login/>}/>
        <Route path = "/Register" element={<Register/>} />
        <Route path = "/profile" element={<Mystatus/>}/>
        <Route path = "/Doc_prof" element={<Doc_prof/>}/>
        <Route path = "/AboutUs" element={<Aboutus/>}/>
        <Route path ="/Doctor" element={<Doctor/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
