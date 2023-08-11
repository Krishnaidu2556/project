import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, } from 'react-router-dom'

function User_profile() {
    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('id'))) {
            redirect('/index');
        }
        fetch();
    }, []);

    const [data, setData] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
        setData(res.data);
    }


    return (
        <div>
            <section className="upcoming-meetings" id="meetings">
                <div className="container">
                    <div className="row">
                        <div className="card-body">
                            <div className="table-responsive">
                                <h1 className='text-center text-white mb-5'>The Company Employee User Profile of <br />{data.name}</h1>

                                <div class="row col-md-12 justify-content-center">
                                    <div class="col-md-3 text-center  ">
                                        <div className="latest text-center pb-3 rounded" style={{ marginBottom: 45, backgroundColor: "white" }}>
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="#" style={{ width: "100%", height: "200px" }} />
                                            <div className="nostrud p-3" >
                                                <h3>{data.name} </h3>
                                                <p>{data.email}</p>
                                                <p>{data.mobile}</p>
                                                <span className="yellow">{data.id}</span><br />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet inventore illum labore tempora blanditiis expedita facere tempore in doloremque ducimus. Saepe consequuntur neque eum soluta nihil accusamus beatae cumque. Nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, omnis deleniti veniam ut ex velit asperiores molestiae magni, quidem non eum libero, tenetur facere magnam recusandae quasi! Quidem, ab adipisci. lo</p>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default User_profile
