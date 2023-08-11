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
    <div>
      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
          <div className="card-body">
                    <div className="table-responsive">
                                    <div class="row col-md-12 justify-content-center">

                        {
                            data.map((item, index, ent) => {
                                return (
                                        <div class="col-md-3 text-center offset-1 ">
                                            <div className="latest text-center pb-3 rounded" style={{ marginBottom: 45, backgroundColor:"white"}}>
                                                <img src={item.imageurl} alt="#" style={{width:"100%",height:"200px"}} />
                                                <div className="nostrud p-3" >
                                                    <h3>{item.name} </h3>
                                                    <p>{item.email}</p>
                                                    <p>{item.mobile}</p>
                                                    <span className="yellow">{item.id}</span><br />
                                                </div>
                                            </div>
                                        </div>
                                        

                                
                                )
                            })
                        }    </div>

                    </div>
                </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default View_Product
