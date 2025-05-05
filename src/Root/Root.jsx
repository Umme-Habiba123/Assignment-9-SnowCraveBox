import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer'


import HowItWorks from '../Components/HowItWorks';
import CountUpSection from '../Components/CountUpSection';
import AboutMe from '../Components/AboutMe';





const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;