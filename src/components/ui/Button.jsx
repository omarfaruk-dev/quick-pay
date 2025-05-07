import React from 'react';

const Button = ({ label, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer whitespace-no-wrap bg-yellow-400 text-blue-700 border-2 border-transparent rounded-full shadow-sm hover:bg-yellow-300 hover:border-yellow-300 focus:outline-none">
            {label}
        </button>
    );
};

export default Button;