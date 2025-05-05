import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-blue-700"></div>
        </div>
    );
};

export default Loading;