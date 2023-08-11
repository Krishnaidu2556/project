import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Dashbord from "./Pages/Dashbord";
import Footer from "./components/Footer";
import Manage_User from "./Pages/Manage_User";
import Manage_Contact from "./Pages/Manage_Contact";
import Manage_product from "./Pages/Manage_product";
import Add_product from "./Pages/Add_product";
import Login from "./Pages/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit_User from "./Pages/Edit_User";
import View_Product from "./Pages/View_Product";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>

        <Routes>
           <Route index path="/login" element={<><Login/></>}></Route>
          <Route  path="/" element={<><Header /><Dashbord /><Footer /></>}></Route>
          <Route path="/manage_user" element={<><Header /><Manage_User /><Footer/></>}></Route>
           <Route path="/manage_user" element={<><Header /><Manage_User /><Footer /></>}></Route>
          <Route path="/manage_conatct" element={<><Header /><Manage_Contact /><Footer /></>}></Route>
          <Route path="/manage_product" element={<><Header /><Manage_product /><Footer /></>}></Route>
          <Route path="/add_product" element={<><Header /><Add_product /><Footer /></>}></Route> 
          <Route path="/edit_user/:id" element={<><Header /><Edit_User/><Footer /></>}></Route> 
          <Route path="/view_product" element={<><Header /><View_Product/><Footer /></>}></Route> 
          


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
