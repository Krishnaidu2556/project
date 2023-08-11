import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';
  import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Login() {

  const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('adminname')) {
      redirect('/index');
    }
  }, []);

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  })

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
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

          if (res.data[0].status == "Unblock") {
            localStorage.setItem('name', res.data[0].name);
            localStorage.setItem('id', res.data[0].id);

            setFormvalue({ ...formvalue, email: "", password: "" });
            toast.success('Login Successfull !');
            redirect("/");
          }
          else {
            toast.success('Login Failed due to user Blocked !');
            setFormvalue({ ...formvalue, email: "", password: "" });
            redirect('/login');
          }
        }
        else {
          toast.success('Password Not valid !');
          setFormvalue({ ...formvalue, email: "", password: "" });
        }
      }



      else {
        toast.success('Username Not valid !');
        setFormvalue({ ...formvalue, email: "", password: "" });
      }
    }
  }

  return (
    <div>
      <div>
        <section className="contact-us" id="contact" >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center mb-5 offset-3">
                <div className="row">
                  <div className="col-lg-12 ">
                    <form id="contact" action method="post" style={{ backgroundColor: "transparent", border: "2px solid white" }}>
                      <div className="row ">
                        <div className="col-lg-8 offset-2 ">
                          <h2 className='text-white'>Login Form</h2>
                        </div>

                        <div className="col-lg-8 offset-2">
                          <fieldset>
                            <input name="email" type="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required value={formvalue.email} onChange={onchange} />
                          </fieldset>
                        </div>

                        <div className="col-lg-8 offset-2">
                          <fieldset>
                            <input name="password" type="password" className="form-control" id="message" placeholder="YOUR PASSWORD..." required defaultValue={""} value={formvalue.password} onChange={onchange} />
                          </fieldset>
                        </div>
                        <div className="col-lg-8 offset-4 mb-5">
                          <fieldset>
                            <button type="submit" id="form-submit" className="button" onClick={onsubmit}>SUBMIT</button>
                          </fieldset>
                        </div>
                        <p style={{ color: "white" }}>If you are new Create Account <NavLink to="/signup"> Sign up</NavLink></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login



