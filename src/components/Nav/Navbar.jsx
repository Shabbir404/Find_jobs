import { Link, NavLink } from "react-router-dom";
import img from '../../assets/CareerHub.png'

const links = <>

    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/Satistics'>Satistics</NavLink></li>
    <li><NavLink to='/applied'>Applied Jobs</NavLink></li>
    <li><NavLink to='/alljobs'>Jobs</NavLink></li>
    <li><NavLink to='/blog'>Blogs</NavLink></li>
</>
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link><img src={img} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Apply now</a>
            </div>
        </div>
    );
};

export default Navbar;