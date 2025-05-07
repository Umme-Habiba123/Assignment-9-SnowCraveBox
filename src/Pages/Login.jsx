import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { use, useRef, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { auth } from '../firebase.config';
import { LuEyeClosed } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider } from 'firebase/auth/web-extension';


const Login = () => {

    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const handleForgetPassword = () => {

        console.log(emailRef.current.value)
        const email = emailRef.current.value

        if (!email) {
            setErrorMessage('Please enter your email first !')
            return
        }

        setErrorMessage(' ')
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result)
                navigate('/resetpassword')
            }).catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'oapss sorry!!',
                });
            })
        setErrorMessage(errorMessage)
    }



    const { setLoading } = use(AuthContext)
    const provider = new GoogleAuthProvider()


    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    // Google log in-------
    const handleGoogleSignIn = () => {
        console.log('google login clicked')
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                navigate('/')
            }).catch(error => console.log(error))
    }

    // facebook login-------

    const handleFacebookLogIn = () => {
        console.log('loged in by facebook')

    }
    const githubProvider = new GithubAuthProvider()

    const handleGithublogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result)
            }).catch(error => console.log(error))
    }

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const checkbox = e.target.checkbox.checked
        console.log(email, password, checkbox)


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



        signInWithEmailAndPassword(auth, email, password).then(result => {
            setLoading(true)
            console.log(result)
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'You have logged in successfully.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Continue'
            }).then(() => {
                setLoading(false)
                navigate(location?.state || '/');
            });

            setSuccess(true)
        }).catch(error => {
            console.log(error.message)
            setSuccess(false)
            if(error.code=== 'auth/wrong-password'){
                setErrorMessage('Incorrect Password. Please try agai')
            }
            else if(error.code=== 'auth/user-not-found'){
                setErrorMessage('No user found with this email.')
            }
            else{
                setErrorMessage('Loging failed. Please try again later .')
            }
            setSuccess(false)
        })





    }


    return (
        <div className='gloria-hallelujah-font'>
            <div className="  min-h-screen">
                <div className="hero-content flex-col ml-80 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign in</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogIn} className="fieldset">
                                <label className="label ">Email</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="input  bg-gray-100 border-none" placeholder="📩 Type your email"
                                    name='email'
                                    required
                                />
                                <label className="label">Password</label>
                                <div className=' relative'>
                                    <input
                                        type={showPassword ? 'text' : "password"}
                                        className="input  bg-gray-100 border-none"
                                        placeholder=" 🔒Type your password"
                                        name='password' />

                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='  btn-xs top-3 absolute right-8'>
                                        {
                                            showPassword ? <FaRegEye size={18} /> : <LuEyeClosed size={18} />
                                        }

                                    </button>
                                </div>

                                <div>
                                    <button type='button' onClick={handleForgetPassword} className="link link-hover hover:text-blue-600 ">Forgot password?</button></div>


                                {/* checkbox */}
                                <label className="label mt-2 text-sm">
                                    <input type="checkbox"
                                        name='checkbox'
                                        className="checkbox" />
                                    Accept Terms and Conditions
                                </label>


                                <button className="btn btn-neutral text-lg bg-cyan-500 border border-cyan-500 hover:bg-white hover:text-black mt-4">Login</button>
                            </form>

                            {
                                errorMessage && <h1 className='text-red-500 font-bold'>{errorMessage}</h1>
                            }
                            {
                                success && <h1 className='text-green-600 font-semibold'>User has sign in successfully</h1>
                            }

                            <p className='text-center text-gray-500 mt-5'>Or sign up Using</p>
                            <div className='flex justify-center gap-3 mt-2'>
                                <h1 onClick={handleFacebookLogIn} ><FaFacebook size={25} /></h1>
                                <Link >
                                    <h1 onClick={handleGoogleSignIn}><FaGoogle size={25} /></h1>
                                </Link>
                                <Link>
                                    <h1 onClick={handleGithublogin}><FaGithub size={25} />
                                    </h1></Link>
                            </div>

                            <div className='mt-10 text-center'>
                                <p className=''>Not a Member? <Link to={'/register'}><span className='text-blue-600 underline'>Register</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;