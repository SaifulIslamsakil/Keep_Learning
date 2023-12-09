import { useContext } from "react";
import { AuthContex } from "../Provider/Provider";
import { Navigate } from "react-router-dom";
import UseAdmin from "../Hooks/UserAdmin/UseAdmin";


const AdminPrivate = ({children}) => {
    const {isAdmin, isPending} = UseAdmin()
      
    const {user,loding} = useContext(AuthContex)

    if(loding|| isPending){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user || isAdmin.checkAdmin){
        return children
    }
    return <Navigate to="/"></Navigate>
    
};

export default AdminPrivate;