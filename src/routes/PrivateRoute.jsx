import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/ui/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/login' />
    }
    return children
    
};

export default PrivateRoute;