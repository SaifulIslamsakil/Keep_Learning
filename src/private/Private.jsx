import {  useContext } from "react";
import { AuthContex } from "../Provider/Provider";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
    
    const {user,loding} = useContext(AuthContex)

    if(loding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default Private;