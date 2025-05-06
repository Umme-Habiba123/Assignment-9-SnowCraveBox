import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { use, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { auth } from '../firebase.config';
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const { user, setUser, setLoading, updateUser } = use(AuthContext) 

    const navigate=useNavigate()

    const provider = new GoogleAuthProvider()

    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleGoogleRegister = () => {
        console.log('google login clicked')
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }

    const githubProvider = new GithubAuthProvider()

    const handleGithubRegister = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result)
            }).catch(error => console.log(error))
    }

    const handleRegister = e => {
        e.preventDefault()

        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value
        const checkbox = e.target.checkbox.checked
        console.log(email, password, checkbox, firstName, lastName, photoURL)


        if (password.length < 6) {
            setErrorMessage('Password must be at least 8 characters long.')
            return
        } else if (!/[A-Z]/.test(password)) {
            setErrorMessage(' Password must contain at least one uppercase letter.')
            return
        } else if (!/[a-z]/.test(password)) {
            setErrorMessage(' Password must contain at least one lowercase letter.')
            return
        } else if (!/[0-9]/.test(password)) {
            setErrorMessage('Password must contain at least one number.')
            return
        }
        else {
            setErrorMessage('')
        }

        if (!checkbox) {
            setErrorMessage('Please Accept Our Terms and Conditions')
            return
        }

        createUserWithEmailAndPassword(auth, email, password).then(result => {
            setLoading(true)
            console.log(result)

            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'Your account has been created successfully.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Continue'
              })
              
            setErrorMessage('')
            setSuccess(true)
            
            updateUser({displayName: firstName +' '+ lastName, photoURL:photoURL}).then(()=>{
              signOut(auth).then(result=>{
                console.log(result)
                navigate('/')
              })
               
            }).catch(error=>console.log(error))
           
        }).catch(error => {
            console.log(error.message)
            setUser(user)
            setSuccess(false)
        })



    }


    return (
        <div className='gloria-hallelujah-font'>
            <div className="  min-h-screen">
                <div className="hero-content flex-col ml-80 ">
                    <div className="text-start lg:text-left">
                        <h1 className="text-4xl text-gray-600 font-bold ml-15">Register</h1>
                        <p className='text-cyan-700 mt-2'>Please fill in this form to creat an account !</p>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} className="fieldset">
                                {/* 1st-inpurt */}

                                <div className='flex gap-4'>
                                    <div>

                                        <label className="label ">First Name</label>

                                        <input

                                            type="name"
                                            className="input bg-gray-100 border-none" placeholder="👤First Name"
                                            name='firstName'
                                            required
                                        />
                                    </div>
                                    {/* last name */}
                                    <div>
                                        <label className="label ">Last Name</label>
                                        <input
                                            type="name"
                                            className="input bg-gray-100 border-none " placeholder=" 👤Last name"
                                            name='lastName'
                                            required
                                        />
                                    </div>
                                </div>
                                {/* 2nd--input */}
                                <label className="label ">PhotoURL</label>
                                <input
                                    type="photoURL"
                                    className="input  bg-gray-100 border-none" placeholder=" 📷PhotoURL"
                                    name='photoURL'
                                    required
                                />
                                {/* 3rd--input */}
                                <label className="label ">Email</label>
                                <input
                                    type="email"
                                    className="input  bg-gray-100 border-none" placeholder="📩 Type your email"
                                    name='email'
                                    required
                                />
                                {/* 4th--input */}
                                <label className="label">Password</label>
                                <div className=' relative'>
                                    <input
                                        type={showPassword ? 'text' : "password"}
                                        className="input bg-gray-100 border-none"
                                        placeholder=" 🔒Type your password"
                                        name='password'
                                        required />

                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='  btn-xs top-3 absolute right-8'>
                                        {
                                            showPassword ? <FaRegEye size={18} /> : <LuEyeClosed size={18} />
                                        }

                                    </button>
                                </div>

                                {/* checkbox */}
                                <label className="label mt-2 text-sm">
                                    <input type="checkbox"
                                        name='checkbox'
                                        className="checkbox" />
                                   I accept the<span className='text-blue-500'>Terms of  Use</span>&<span className='text-blue-500'>Privacy policy</span>
                                </label>


                                <button type='submit' className="btn btn-neutral text-lg bg-cyan-500 border border-cyan-500 hover:bg-white hover:text-black mt-4">SIGN UP</button>
                            </form>

                            {
                                errorMessage && <h1 className='text-red-500 font-bold'>{errorMessage}</h1>
                            }
                            {
                                success && <h1 className='text-green-600 font-semibold'>User has sign in successfully</h1>
                            }

                            <p className='text-center text-gray-500 mt-5'>Or sign up Using</p>
                            <div className='flex justify-center gap-3 mt-2'>
                                <Link>
                                    <h1><FaFacebook size={25} /></h1>
                                </Link>
                                <Link >
                                    <h1 onClick={handleGoogleRegister}><FaGoogle size={25} /></h1>
                                </Link>
                                <Link>
                                    <h1 onClick={handleGithubRegister}><FaGithub size={25} />
                                    </h1></Link>
                            </div>

                            <div className='mt-2 text-center'>
                                <p className=''>Already have an Account?<Link to={'/login'}><span className='text-blue-600 underline'> Sign in here</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;