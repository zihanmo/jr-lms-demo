import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isLoggedIn } from '../../utils/auth';
import { LOGIN_URL } from '../URLMap';

const ProtectedRoute = props => {
    if (!isLoggedIn()) return <Redirect to={{
        pathname: LOGIN_URL,
        state: { from: props.path },
    }} />

    return <Route {...props} />;
};

export default ProtectedRoute;
