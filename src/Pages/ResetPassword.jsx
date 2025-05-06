import React, { useRef, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase.config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


const ResetPassword = () => {
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate =useNavigate()

    const handleReset = () => {
        const email = emailRef.current.value;

        if (!email) {
            setError('Please enter your email address.');
            setSuccess('');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess('Reset link sent! Check your inbox.');
                setError('');
                Swal.fire('Success!', 'Please check your email to reset your password.', 'success');
                navigate('/login')
            })
            .catch(() => {
                setError('Failed to send reset link. Try again.');
                setSuccess('');
            });
    };

    return (
       <div className=''>
        <p className='text-3xl text-center text-gray-700 gloria-hallelujah-font '>Please Reset your Password !</p>

         <div className=' flex items-center justify-center  '>
           
            <div className='w-96 mb-38 mt-4 bg-white p-6 rounded-lg shadow-lg'>
           
               
            <label className="label mb-1 ">📩 Email</label>
                <input
                    type="email"
                    ref={emailRef}
                    placeholder="Enter your email"
                    className="input input-bordered w-full mb-4"
                    required
                />
                <button
                    onClick={handleReset}
                    className='btn bg-gray-300 border hover:bg-cyan-200 text-blue-600 hover:text-black  w-full '

                >
                    Reset Password
                </button>

                {error && <p className='text-red-500 mt-2 text-sm'>{error}</p>}
                {success && <p className='text-green-500 mt-2 text-sm'>{success}</p>}
            </div>
        </div>
       </div>
    );
};

export default ResetPassword;
