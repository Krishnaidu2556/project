import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import  {  useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

function Signup() {
    const [formvalue, setFormValue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
    });

    const onchange = (e) => {
        setFormValue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const redirect = useNavigate();

    useEffect(() => {
     
            redirect('/signup');
       
    }, []);

    const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
            result = false;
            toast.error('name faild is required');
            return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            toast.error('email faild is required');
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            result = false;
            toast.error('password faild is required');
            return false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            result = false;
            toast.error('mobile faild is required');
            return false;
        }
        return result;

    }

    const onsubmit = async(e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post('http://localhost:3000/user', formvalue);
             console.log(res)
            if (res.status === 201) {
               
                setFormValue({...formvalue, name: "", email: "", password: "", mobile: "" })
                console.log('res');
                redirect('/index');

            }
        }
    }
  return (
   <div>
       <section className="contact-us" id="contact" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center mb-5 offset-3">
              <div className="row">
                <div className="col-lg-12 ">
                  <form id="contact" action method="post" style={{backgroundColor:"transparent",border:"2px solid white"}}>
                    <div className="row ">
                      <div className="col-lg-8 offset-2 ">
                        <h2 className='text-white'>Signup Form</h2>
                      </div>
                      <div className="col-lg-8 offset-2 ">
                        <fieldset>
                          <input name="name" type="text" id="name" placeholder="YOURNAME...*" required value={formvalue.name} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-8 offset-2">
                        <fieldset>
                          <input name="email" type="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required   />
                        </fieldset>
                      </div>
                      <div className="col-lg-8 offset-2">
                        <fieldset>
                          <input name="mobile" type="tel" id="subject" placeholder="MOBILE NO..." required value={formvalue.mobile} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-8 offset-2">
                        <fieldset>
                          <input name="password" type="password" className="form-control" id="message" placeholder="YOUR PASSWORD..." required defaultValue={""} value={formvalue.password} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-8 offset-4">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button" onClick={onsubmit}>SEND MESSAGE NOW</button>
                        </fieldset>
                      </div>
                      <p><NavLink to="/login">login in page</NavLink></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
