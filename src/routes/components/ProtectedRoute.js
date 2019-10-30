import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isLoggedIn } from '../../utils/auth';
import { LOGIN_URL } from '../URLMap';

const ProtectedRoute = props => {
    if (!isLoggedIn()) return <Redirect to={LOGIN_URL} />

    return <Route {...props} />;
};

export default ProtectedRoute;
