import React from 'react';

const Button = ({ label, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer whitespace-no-wrap bg-white text-blue-700 hover:text-purple-600 border-2 border-transparent rounded-full shadow-sm hover:bg-gray-200 hover:border-gray-300 focus:outline-none">
            {label}
        </button>
    );
};

export default Button;