import React from 'react';

const Button = ({ label, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex items-center justify-center px-4 py-2 text-base font-medium cursor-pointer whitespace-no-wrap bg-[#9FE870] border-2 border-transparent rounded-full shadow-sm hover:bg-[#80E142] hover:border-[#80E142] focus:outline-none">
            {label}
        </button>
    );
};

export default Button;