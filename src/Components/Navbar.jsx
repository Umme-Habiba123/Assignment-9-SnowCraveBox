import React, { use } from 'react';
import navbarPhoto from '../assets/navbar-photo.png'
import { Link, NavLink } from 'react-router';
import profile from '../assets/user.png'
import { IoPawOutline } from "react-icons/io5";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user } = use(AuthContext)


    const handleSignOut = () => {
        console.log('sign out')

        signOut(auth).then((result) => {
            console.log(result)
            Swal.fire({
                icon: 'success',
                title: 'Logged out!',
                text: 'You have been signed out successfully.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
            });
        })
            .catch(error => console.log(error))
    }

    const links = <>
        <li className='text-cyan-500 hover:scale-105 '><NavLink to={'/'}>HOME</NavLink></li>
        <li className='text-cyan-500  hover:scale-105' ><NavLink to={'/myprofile'}>MY PROFILE</NavLink></li>
        <li className='text-cyan-500 hover:scale-105 '><NavLink to={'/contact'}>CONTACT</NavLink></li>

      {
        user?(
            <> 
            <li className='text-cyan-500 text-xl hover:scale-105'><NavLink to={'/blog'}>Blog</NavLink></li>
            <li className='text-cyan-500 hover:scale-105 mt-1'><NavLink to="#"><IoPawOutline size={25} /></NavLink></li>
            </>
        ): null
      }
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
                    <img className='lg:w-50 md:hidden lg:ml-30 lg:block hidden ' src={navbarPhoto} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <span className='flex font-bold text-lg'>{links}</span>
                    </ul>
                </div>

                <div className="navbar-end relative   group cursor-pointer">
                    <img 
                    className='  lg:mr-4  w-5 mr-2 lg:w-12 cursor-pointer' 
                    src={`${user ? user.photoURL : profile}`} 
                    alt="user photo" />
                    <div>
                        <p className='mr-2 text-xs font-semibold text-gray-500 absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 tooltip-text'>Name : {user ? user.displayName : ' guest '}</p>
                        <p className='mr-2  text-xs font-semibold text-gray-500'> {user ? user.email : ' '}  </p>
                    </div>

                    {
                        user ? <button onClick={handleSignOut} className="btn lg:px-10 lg:text-lg bg-cyan-200 hover:bg-white border-cyan-200 hover:scale-110 ">SIGN OUT</button>
                         :
                            <Link to={'/login'} className="btn lg:px-10 lg:text-lg bg-cyan-200 hover:bg-white border-cyan-200 hover:scale-110">SIGN IN</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;