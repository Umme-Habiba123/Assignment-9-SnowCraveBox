import React from 'react';
import navbarPhoto from '../assets/navbar-photo.png'
import { Link, NavLink } from 'react-router';
import profile from '../assets/user.png'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const links=<>
       <li className='text-cyan-500 hover:scale-105 '><NavLink to={'/'}>HOME</NavLink></li> 
       <li className='text-cyan-500  hover:scale-105' ><NavLink to={'/myprofile'}>MY PROFILE</NavLink></li> 
       <li className='text-cyan-500 hover:scale-105 '><NavLink to={'/contact'}>CONTACT</NavLink></li> 
       <li className='text-cyan-500  hover:scale-105'><NavLink to={'/shop'}>SHOP</NavLink></li> 
       <li className='text-cyan-500  hover:scale-105 mt-1'><NavLink to={'/cart'}><FaShoppingCart /></NavLink></li> 
                       
    </>
    return (
        <div className='gloria-hallelujah-font w-10/12 mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                   <img className='lg:w-50 w-20 lg:ml-30' src={navbarPhoto} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      <span className='flex font-bold text-lg'>{links}</span>
                    </ul>
                </div>
            
                <div className="navbar-end ">
                    <img className='lg:mr-4  w-5 mr-2 lg:w-12' src={profile} alt="user photo" />
                    <Link to={'/login'} className="btn px-10 text-lg bg-cyan-200 hover:bg-white border-cyan-200 hover:scale-110">SIGN IN</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;