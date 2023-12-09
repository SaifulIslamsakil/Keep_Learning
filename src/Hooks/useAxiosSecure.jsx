import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/Provider";
const secureAxios = axios.create({
    baseURL: "https://keep-learning-server.vercel.app"
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { userLogout } = useContext(AuthContex)

    secureAxios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("Acces_Token")
        config.headers.authorization = `lahdaklsdasd ${token}`
        return config

    }, function (error) {
        return Promise.reject(error)
    })

    secureAxios.interceptors.response.use((confiq) => {
        return confiq
    }, async (error) => {
        const status = error.response.status
        
        if (status === 401 || status === 403) {
            await userLogout()
            navigate("/login")

        }
        return Promise.reject(error)
    })

    return secureAxios
};

export default useAxiosSecure;