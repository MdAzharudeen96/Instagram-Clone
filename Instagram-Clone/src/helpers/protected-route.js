import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
// import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, component, ...rest }) {
    console.log(rest)
    return (
        <Routes>
            <Route {...rest} element={user ? component : <Login />}/>
        </Routes>
    );
}