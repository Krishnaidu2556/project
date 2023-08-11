import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Pages/Index";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import View_Product from "./Pages/View_Product";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import User_profile from "./Pages/User_profile";



function App() {
  return (  
    <BrowserRouter>
    <ToastContainer/> 
     <Routes>
     <Route path="/signup" index  element={<><Header/><Signup/><Footer/></>}></Route>
     <Route path="/login"  element={<><Header/><Login/><Footer/></>}></Route>
     <Route path="/"  element={<><Header/><Index/><Footer/></>}></Route>
     <Route path="/viewproduct"  element={<><Header/><View_Product/><Footer/></>}></Route>
     <Route path="/courses"  element={<><Header/><Courses/><Footer/></>}></Route>
     <Route path="/contact"  element={<><Header/><Contact/><Footer/></>}></Route>
     <Route path="/signup"  element={<><Signup/></>}></Route>
     <Route path="/profile"  element={<><Header/><User_profile/><Footer/></>}></Route>

     </Routes>
    </BrowserRouter>
 
 
  );
}

export default App;
