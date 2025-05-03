import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    var isAuth = false
  return (
      isAuth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoutes
