import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) return <span class="visually-hidden">Loading...</span>;
    if (user.email) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;