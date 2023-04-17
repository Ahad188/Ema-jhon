import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRotes = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     const location = useLocation()
     if(loading){
          return <div>Loding....</div>
     }
     if(user){
          return children;
     }
     return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRotes;