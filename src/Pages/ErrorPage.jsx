import React from 'react';
import errorPhoto from '../assets/errorPhoto.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-[600px] mx-auto mt-20 rounded-full' src={errorPhoto} alt="" />
            <h1 className='text-2xl mt-2 font-bold text-red-500
             text-center'>This page doesn't exist...</h1>
        </div>
    );
};

export default ErrorPage;