import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

function Edit_User() {

    useEffect(() => {
        onedit();
    }, [])

    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    })

    const { id } = useParams();

    const onedit = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue({ ...formvalue, name: res.data.name, email: res.data.email, password: res.data.password, mobile: res.data.mobile })
    }

    const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const validation = () => {
        let result = true;
        if (formvalue.name == "" || formvalue.name == null) {
            result = false;
            toast.error('Name field is required !');
            return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            toast.error('email field is required !');
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            result = false;
            toast.error('password field is required !');
            return false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            result = false;
            toast.error('mobile field is required !');
            return false;
        }
        return result;
    }

    const redirect = useNavigate();

    const onupadte = async (e) => {
        if (validation()) {
            e.preventDefault();
            await axios.patch(`http://localhost:3000/user/${id}`, formvalue)
                .then((res) => {
                    console.log(res)
                    if (res.status === 200) {
                        setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
                        redirect('/manage_user')
                        toast.success('Update Success')

                    }
                })
        }
    }

    return (
        <div>
            <div className="content-wrapper">
                <div className="appointment">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="titlepage text_align_center">
                                    <h2>Edit Usewr</h2>
                                </div>
                            </div>
                            <div className='container p-5'>
                                <form>
                                    <div className="form-group pb-3 rounded-circle">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={formvalue.name} onChange={onchange} name='name' />
                                    </div>
                                    <div className="form-group pb-3">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formvalue.email} onChange={onchange} name='email' />
                                    </div>
                                    <div className="form-group pb-3" >
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={formvalue.password} onChange={onchange} name='password' />
                                    </div>
                                    <div className="form-group pb-3">
                                        <label htmlFor="exampleInputPassword1">Number</label>
                                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile No:" value={formvalue.mobile} onChange={onchange} name='mobile' />
                                    </div>

                                    <button type="submit" className="btn btn-primary" onClick={onupadte}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit_User
