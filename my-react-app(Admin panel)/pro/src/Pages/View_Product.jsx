import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink, } from 'react-router-dom'


function View_Product() {
        const [data, setdata] = useState([]);

        useEffect(() => {
            fetchdata();
        })

        const fetchdata = async (id) => {
            const res = await axios.get('http://localhost:3000/addproduct')
            setdata(res.data)

        }

    return (
        <div className="main-footer">
            <div className="card shadow mb-4">
                <div className="container my-auto">
                    <h1 className="m-0 font-weight-bold text-primary text-center m-3">View Product</h1>
                </div>
                <div className="card-body">
                    <div className="table-responsive">

                        {
                            data.map((item, index, ent) => {
                                return (
                                    <div className=" col-md-4 offset-1 ">
                                        <div className="latest text-center " style={{ marginBottom: 45 }}>
                                            <figure><img src={item.imageurl} alt="#" style={{ height: 200, width: 350 }} /></figure>
                                            <div className="nostrud">
                                                <h3>{item.name} </h3>
                                                <p>{item.email}</p>
                                                <p>{item.mobile}</p>
                                                <span className="yellow">{item.id}</span><br />
                                                <NavLink className="read_more" to="/add_product">Add Product</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default View_Product











