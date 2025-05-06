// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
// import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const location = useLocation()

    const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    //validation
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showValidation, setShowValidation] = useState(false);

    const validation = {
        length: password.length >= 6,
        lowerUpper: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
        numberOrSymbol: /(?=.*[0-9])|(?=.*[^A-Za-z0-9])/.test(password),
        emailNotIncluded: !password.includes(email.split('@')[0]),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`)
                alert('Registration Succuss!')
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                })
                    .catch(error => {
                        setUser(user);
                    })

            })
            .catch(error => {
                alert(error);
            })
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                alert('successfully login with google')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Register for Quick Pay</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="Enter your photo URL"
                        />
                    </div>

                    {/* Password with show/hide */}
                    <div>
                        <label className="block text-sm font-medium text-blue-800 mb-1">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                value={password}
                                onFocus={() => setShowValidation(true)}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                className="w-full border border-gray-300 rounded-3xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    {/* Show validation list on focus */}
                    {showValidation && (
                        <ul className="mt-2 text-sm space-y-1">
                            <li className={validation.length ? "text-green-600" : "text-red-600"}>
                                {validation.length ? "✔" : "✘"} contains at least 6 characters
                            </li>
                            <li className={validation.lowerUpper ? "text-green-600" : "text-red-600"}>
                                {validation.lowerUpper ? "✔" : "✘"} contains both lower (a-z) and upper case letters (A-Z)
                            </li>
                            <li className={validation.numberOrSymbol ? "text-green-600" : "text-red-600"}>
                                {validation.numberOrSymbol ? "✔" : "✘"} contains at least one number (0-9) or a symbol
                            </li>
                            <li className={validation.emailNotIncluded ? "text-green-600" : "text-red-600"}>
                                {validation.emailNotIncluded ? "✔ " : "✘"} does not contain your email address
                            </li>
                        </ul>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="text-lg cursor-pointer w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:bg-gradient-to-l hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 text-white py-2 rounded-3xl font-semibold transition-all"
                    >
                        Register
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
                            <p> Continue with Google</p>
                        </button>
                    </div>

                    {/* Login link */}
                    <p className="text-center text-sm text-blue-800 mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-purple-700 hover:underline hover:text-blue-700 transition-all">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
