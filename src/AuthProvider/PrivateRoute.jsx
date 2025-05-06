import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Pages/Loading';
import { Navigate, useLoaderData } from 'react-router';

const PrivateRoute = ({children}) => {

    const location=useLoaderData()
 

    const {user}=use(AuthContext)
    console.log(user)

    const {loading}=use(AuthContext)
   if(loading){
    return <Loading></Loading>
   }

   if(user && user?.email ){
    return children
   }
   return <>
    <Navigate state={location?.pathname} to={'/login'}></Navigate>
 
   
   </>
 

   
};

export default PrivateRoute;