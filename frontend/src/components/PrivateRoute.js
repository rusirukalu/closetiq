import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = auth.currentUser; // Check if the user is authenticated

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
