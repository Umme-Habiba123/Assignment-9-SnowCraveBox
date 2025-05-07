import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer'
import FromTop from '../Components/FromTop';






const Root = () => {
    return (
        <div className=''>
            <FromTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </FromTop>

        </div>
    );
};

export default Root;