import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet'


function Header() {
    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('adminid'))) {
            redirect('/');
        }

    }, [])


    const logout = () => {
        localStorage.removeItem('adminid');
        localStorage.removeItem('adminname');
        toast.success('Logout Successfull !');
        redirect('/');
    }

    return (
        <div>

            <header className="main-header">
                <a href="index2.html" className="logo"><b>Admin</b>LTE</a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle " data-toggle="offcanvas" role="button"    >
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="top-menu">
                        <ul className="nav pull-right top-menu">
                            <li><a className="logout" href="javascript:void(0)" onClick={logout} >Logout</a></li>
                        </ul>
                    </div>
                    <div >
                        {(() => {
                            if (localStorage.getItem('adminname')) {
                                return (
                                    <p className="mb-0 ms-3"> {localStorage.getItem('adminname')}</p>
                                )
                            }
                        })()}
                    </div>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o" />
                                    <span className="label label-success">4</span>
                                </a>
                            </li>
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o" />
                                    <span className="label label-warning">10</span>
                                </a>
                            </li>
                            <li className="dropdown tasks-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-flag-o" />
                                    <span className="label label-danger">9</span>
                                </a>
                            </li>
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                    <span className="hidden-xs">Alexander Pierce</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside className="main-sidebar">
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" /></button>
                            </span>
                        </div>
                    </form>

                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <Link href="#">
                                <i className="fa fa-dashboard" /> <span>Pages</span> <i className="fa fa-angle-left pull-right" />
                            </Link>
                            <ul className="treeview-menu">
                                <li><NavLink to="/dashboard"><i className="fa fa-circle-o" />Dashboard</NavLink></li>
                                <li><NavLink to="/manage_user"><i className="fa fa-circle-o" />Manage User</NavLink></li>
                                <li><NavLink to="/manage_conatct"><i className="fa fa-circle-o" />Manage Contact</NavLink></li>
                                <li><NavLink to="/manage_product"><i className="fa fa-circle-o" />Manage Product</NavLink></li>
                                <li><NavLink to="/add_product"><i className="fa fa-circle-o" />Add Product</NavLink></li>
                                <li><NavLink to="/edit_user"><i className="fa fa-circle-o" />Edit user</NavLink></li>
                                <li><NavLink to="/view_product"><i className="fa fa-circle-o" />View Product</NavLink></li>
                            </ul>

                        </li>


                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>


            <Helmet>
                <script src="plugins/jQuery/jQuery-2.1.3.min.js"></script>
                <script src="http://code.jquery.com/ui/1.11.2/jquery-ui.min.js" type="text/javascript"></script>
                <script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
                <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
                <script src="plugins/morris/morris.min.js" type="text/javascript"></script>
                <script src="plugins/sparkline/jquery.sparkline.min.js" type="text/javascript"></script>
                <script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" type="text/javascript"></script>
                <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js" type="text/javascript"></script>
                <script src="plugins/knob/jquery.knob.js" type="text/javascript"></script>
                <script src="plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
                <script src="plugins/datepicker/bootstrap-datepicker.js" type="text/javascript"></script>
                <script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>
                <script src="plugins/iCheck/icheck.min.js" type="text/javascript"></script>
                <script src="plugins/slimScroll/jquery.slimscroll.min.js" type="text/javascript"></script>
                <script src='plugins/fastclick/fastclick.min.js'></script>
                <script src="dist/js/app.min.js" type="text/javascript"></script>
                <script src="dist/js/pages/dashboard.js" type="text/javascript"></script>
                <script src="dist/js/demo.js" type="text/javascript"></script>
            </Helmet>
        </div>
    )
}

export default Header
