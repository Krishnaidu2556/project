import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet'
export default function Index() {

    const redirect = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem('adminname')) {
            redirect('/dashboard');
        }
    }, []);

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    })

    const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value});
        //console.log(formvalue);
    }

    const validation = () => {
        var result = true;

        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            toast.error('Email Field is required !');
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            result = false;
            toast.error('Password Field is required !');
            return false;
        }
        return result;
    }


    const onsubmit = async (e) => {
      e.preventDefault();
      if (validation()) {
          const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
          if (res.data.length > 0) {
              if (res.data[0].password == formvalue.password) {

                  // session variable create
                  localStorage.setItem('adminname', res.data[0].email);
                  localStorage.setItem('adminid', res.data[0].password);

                  toast.success('Login Successfull !');
                  setFormvalue({ ...formvalue, email: "", password: "" });
                  redirect('/dashboard');
              }
              else {
                  toast.error('Password Not valid!');
                  setFormvalue({ ...formvalue, email: "", password: "" });
              }
          }
          else {
              toast.error('Username Not valid !');
              setFormvalue({ ...formvalue, email: "", password: "" });
          }
      }
  }


    return (
      
        <div className='container p-5'>
        <form>
            
            <div className="form-group pb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formvalue.email} onChange={onchange} name='email' />
            </div>
            <div className="form-group pb-3" >
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={formvalue.password} onChange={onchange} name='password' />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={onsubmit}>Submit</button>
        </form>
    </div>
          
    )
}
