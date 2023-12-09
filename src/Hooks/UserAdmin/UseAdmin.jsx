import { useContext } from "react";
import { AuthContex } from "../../Provider/Provider";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
   const {user}= useContext(AuthContex)
   const axiosSecure = useAxiosSecure()
   const {data:isAdmin=[],isPending} = useQuery({
    queryKey:["isAdmin", user.email],
    queryFn : async()=>{
        const res = await axiosSecure.get(`/find-Admin-data/${user.email}`)
        console.log(res.data)
        return res.data
    }
   })
   return { isAdmin,isPending}
};

export default UseAdmin;