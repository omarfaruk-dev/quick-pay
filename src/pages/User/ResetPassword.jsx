import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router';

const errorMessages = {
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-not-found': 'No account found with this email.',
};

const ResetPassword = () => {
    const { user, resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        resetPassword(email)
            .then(() => {
                setMessage('Password reset email sent. Please check your inbox.');
                setEmail('');
            })
            .catch((err) => {
                const msg = errorMessages[err.code] || 'Something went wrong. Please try again.';
                setError(msg);
            });
    };
    if (user) {
        return navigate('/')
    }

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
            <title>Forgot Password | Quick Pay</title>
            <div className="max-w-md w-full bg-white p-8 my-10 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-sm text-blue-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                            if (message) setMessage('');
                        }}
                        className="w-full border border-gray-300 rounded-3xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        placeholder="Enter your email"
                    />
                    {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
                    {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                    <button
                        type="submit"
                        className="text-lg cursor-pointer w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 hover:bg-gradient-to-l hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 text-white py-2 rounded-3xl font-semibold transition-all"
                    >
                        Send Reset Link
                    </button>
                    <p className='text-center text-sm text-blue-800 mt-4'>Remember Password? <Link className='text-purple-700 hover:underline hover:text-blue-700 transition-all' to='/login'>Back To Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
