import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';


function Contact() {
  const [formvalue, setFormValue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    message: "",
    status: "",
  });
  const onchange = (e) => {
    setFormValue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);

  }
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
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      result = false;
      toast.error('mobile faild is required');
      return false;
    }
    
    if (formvalue.message == "" || formvalue.message == null) {
      result = false;
      toast.error('message faild is required');
      return false;
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post('http://localhost:3000/contact', formvalue);
       console.log(res)
       if (res.status === 201) {
        setFormValue({ ...formvalue, name: "", email: "", password: "", message: "",mobile:"" })
     }
 }
    // alert("vfgbvfd")
  }
  return (
    <div>
       <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact" action method="post">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Let's get in touch</h2>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="name" type="text" id="name" placeholder="YOURNAME...*" required value={formvalue.name} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="email" type="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required  value={formvalue.email} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="mobile" type="tel" id="subject" placeholder="MOBILE NO..." required value={formvalue.mobile} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" type="text" className="form-control" id="message" placeholder="YOUR MESSAGE..." required defaultValue={""} value={formvalue.message} onChange={onchange} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button" onClick={onsubmit}>SEND MESSAGE NOW</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-info">
                <ul>
                  <li>
                    <h6>Phone Number</h6>
                    <span>010-020-0340</span>
                  </li>
                  <li>
                    <h6>Email Address</h6>
                    <span>info@meeting.edu</span>
                  </li>
                  <li>
                    <h6>Street Address</h6>
                    <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
                  </li>
                  <li>
                    <h6>Website URL</h6>
                    <span>www.meeting.edu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
