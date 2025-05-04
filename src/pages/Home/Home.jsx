import React from 'react';
import { FaBolt, FaFire, FaTint } from 'react-icons/fa';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-yellow-300">Quick Pay</span></h1>
                <p className="text-lg mb-8">
                    Pay your utility bills quickly, securely, and from anywhere. No more long queues or late payments!
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                    <div className="bg-white text-indigo-700 rounded-lg p-6 shadow-lg hover:scale-105 transition">
                        <FaBolt className="text-3xl mb-2 mx-auto text-yellow-500" />
                        <h3 className="text-xl font-semibold">Electricity Bill</h3>
                        <p className="text-sm mt-1">Pay your electricity bill with a few clicks.</p>
                    </div>
                    <div className="bg-white text-indigo-700 rounded-lg p-6 shadow-lg hover:scale-105 transition">
                        <FaFire className="text-3xl mb-2 mx-auto text-red-500" />
                        <h3 className="text-xl font-semibold">Gas Bill</h3>
                        <p className="text-sm mt-1">Never miss your gas bill again.</p>
                    </div>
                    <div className="bg-white text-indigo-700 rounded-lg p-6 shadow-lg hover:scale-105 transition">
                        <FaTint className="text-3xl mb-2 mx-auto text-blue-500" />
                        <h3 className="text-xl font-semibold">Water Bill</h3>
                        <p className="text-sm mt-1">Pay water bills anytime, anywhere.</p>
                    </div>
                </div>

                <div className="space-x-4">
                    <Link to="/register">
                        <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                            Get Started
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-yellow-400 text-indigo-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;