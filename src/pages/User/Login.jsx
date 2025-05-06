import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    //from auth context
    const {user, signInUser, googleSignIn, setUser } = use(AuthContext)
    //use location for path
    const location = useLocation();
    //navigate / redirect to another page
    const navigate = useNavigate()
    //handle error
    const [error, setError] = useState('');
    const errorMessages = {
        "auth/invalid-credential": "Invalid email or password.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/missing-password": "Please enter your password.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/network-request-failed": "Network error. Check your internet connection.",
    };


    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        //signin user
        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                setUser(currentUser)
                setError('');
                alert('success')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const message = errorMessages[error.code] || "An unexpected error occurred.";
                setError(message)
            })

    }
    if(user) {
        return navigate('/')
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                setError('');
                setUser(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                alert('successfully login with google')
            })
            .catch(error => {
                const message = errorMessages[error.code] || "An unexpected error occurred.";
                setError(message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <h2 className=" text-2xl font-bold text-blue-800 mb-6 text-center">Login to Quick Pay</h2>
                <form onSubmit={handleLogin}
                    className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className="w-full border border-gray-300 rounded-3xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                placeholder="Enter your password"
                                required
                            />
                            {/* eye icon */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    {error && <p className='text-red-500'>✗ {error}</p>}
                    <div className="flex justify-end font-semibold text-sm text-purple-700 hover:text-blue-700 hover:underline">
                        <Link to='/reset-password'>Forgot Password?</Link>
                    </div>
                    <button
                        type="submit"
                        className="text-lg cursor-pointer w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:bg-gradient-to-l hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 text-white py-2 rounded-3xl font-semibold transition"
                    >
                        Login
                    </button>
                    <div className="flex items-center py-3 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                        <p className="px-3 text-sm text-blue-700">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    </div>
                    {/* login with google */}
                    <div className="flex justify-center my-4">
                        <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full py-2 space-x-4 border-2 border-blue-700 bg-white rounded-3xl focus:ring-2 focus:ring-offset-1 focus:ring-purple-700 cursor-pointer">
                            <FcGoogle />
                            <p> Login with Google</p>
                        </button>
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-sm text-blue-800 mt-4">
                        Don’t have an account? <Link to="/register" className="font-semibold text-purple-700 hover:underline hover:text-blue-700">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;