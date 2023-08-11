import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function Header() {
  const redirect = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem('adminid'))) {
      redirect('/');
    }

}, [])
const logout = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('name');
  toast.success('Logout Successfull !');
  redirect('/');
}
return (
  <div>
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8">
            <div className="left-content">
              <p>This is an educational <em>HTML CSS</em> template by TemplateMo website.</p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4">
            <div className="right-icons">
              <ul>
                <li className='text-white'>  {(() => {
                  if (localStorage.getItem('adminname')) {
                    return (
                      <p className="mb-0 ms-3 text-white"> {localStorage.getItem('adminname')}</p>
                    )
                  }
                })()}</li>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>

                {/* <li><button className='btn btn-danger'><a className="logout" href="javascript:void(0)" onClick={logout} >Logout</a></button></li> */}



              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                Edu Meeting
              </a>
              <ul className="nav">
                <li><NavLink to="/" className="active">Home</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/viewproduct">View Product</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                 {/* <li><button type="button" class="btn btn-danger m-0" ><NavLink to="/signup">Login / signup</NavLink></button></li> */}
                 {(() => {
                                    if (localStorage.getItem('id')) {
                                        return (
                                            <a href="javascript:void(0)" onClick={logout} className="btn btn-danger">Logout<i className="fa fa-arrow-right ms-3" /></a>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/login" className="btn btn-danger">Login<i className="fa fa-arrow-right ms-3" /></Link>
                                        )
                                    }
                                })()}




              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>



  </div>
)
}


export default Header
