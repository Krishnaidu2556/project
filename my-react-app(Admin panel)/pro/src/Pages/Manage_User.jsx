import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, NavLink, useNavigate } from 'react-router-dom'



function Manage_User() {

    const redirect = useNavigate();

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetchdata();
    })

    const fetchdata = async (id) => {
        const res = await axios.get('http://localhost:3000/user')
        setdata(res.data)

    }

    const ondelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`)
        fetchdata()
    }

    const updatestatus = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        if (res.data.status == "Block") {
            await axios.patch(`http://localhost:3000/user/${id}`, { status: "Unblock" });
            toast.success('Unblock Success')
            fetchdata();
        }
        else {
            await axios.patch(`http://localhost:3000/user/${id}`, { status: "Block" });
            toast.success('Block Success')
            fetchdata();
        }

    }
    return (
        <div className="main-footer">
            <div className="card shadow mb-4">
                <div className="container my-auto">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <td>id</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Password</td>
                                    <td>User</td>
                                    <td>EDIT</td>
                                    <td>DELETE</td>
                                    <td>STATUS</td>

                                    <td>Edit</td>
                                </tr>

                            </thead>
                            {
                                data.map((item, index, ent) => {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>F
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>{item.mobile}</td>

                                                <td><button class="btn btn-success btn-sm rounded-0 text-center " type="button" data-toggle="tooltip" data-placement="top"
                                                    title="Edit" onClick={() => { redirect('/edit_user/' + item.id) }} ><i class="fa fa-edit" ></i>  Edit</button></td>
                                                <td>
                                                    <button className="btn btn-success btn-xs" onClick={() => updatestatus(item.id)} style={{ marginLeft: "10px" }}><i className="fa fa-check" />{item.status}</button>

                                                </td>
                                                <td><button class="btn btn-danger btn-sm rounded-0 " type="button" data-toggle="tooltip" data-placement="top"
                                                    title="Delete" onClick={() => { ondelete(item.id) }} ><i class="fa fa-trash"></i>  Delete</button></td>
                                        </tr>)
                                })
                            }
                        </table>
                    </div>
                </div>  
            </div>
        </div>

    )
}

export default Manage_User
