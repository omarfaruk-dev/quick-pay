import React from 'react';

const PrivateRoute = ({children}) => {
    return (
        <div>
            {children}
            Private Route
        </div>
    );
};

export default PrivateRoute;