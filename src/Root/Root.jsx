import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Slider></Slider>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;