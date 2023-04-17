import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRotes = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     if(loading){
          return <div>Loding....</div>
     }
     if(user){
          return children;
     }
     return <Navigate to='/login'></Navigate>;
};

export default PrivateRotes;