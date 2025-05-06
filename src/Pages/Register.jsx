import React from 'react';

const Register = () => {
     const [errorMessage, setErrorMessage] = useState('')
        const [success, setSuccess] = useState(false)
        const [showPassword, setShowPassword] = useState(false)


    const handleSignOut=e=>{
       e.preventDefault()
       const email=e.target.email.value
       const password=e.target.password.value
       console.log(email, password)
       
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
                        <form onSubmit={handleSignOut} className="fieldset">
                            <label className="label ">Email</label>
                            <input
                                type="email"
                                className="input " placeholder="📩 Type your email"
                                name='email'
                                required
                            />
                            <label className="label">Password</label>
                            <div className=' relative'>
                                <input
                                    type={showPassword ? 'text' : "password"}
                                    className="input"
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
                                <a className="link link-hover">Forgot password?</a></div>

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
                            <h1><FaFacebook size={25} /></h1>
                            <Link to={'/'}>
                                <h1><FaGoogle size={25} /></h1>
                            </Link>
                            <h1><FaTwitter size={25} />
                            </h1>
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

export default Register;