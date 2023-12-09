import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../Pages/HomePage/Footer/FireBase-Confiq";
import useAciosPublic from "../Hooks/useAxiosPulic"

export const AuthContex = createContext(null)
const Provider = ({children}) => {
    const [user, setUser] = useState('')
    const [loding, setLoding] = useState(true)
    const [axiosPublic] = useAciosPublic()

    const userRegister = (email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(Auth, email,password)
    }
    const userLogin = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const userLogout = ()=>{
        setLoding(true)
        return signOut(Auth)
    }
    useEffect(()=>{
        const unSubcriber = onAuthStateChanged(Auth, currenUser =>{
            setLoding(false)
            setUser(currenUser)
            if( currenUser){
                const userInfo ={
                    email:currenUser.email
                }
                
                axiosPublic.post("/jwt", userInfo)

                .then(res=>{
                    console.log(res.data)
                    if(res.data?.token){
                        localStorage.setItem("Acces_Token", res.data?.token)
                    }
                })
            }
            else{
                localStorage.removeItem("Acces_Token")
            }
        })
        return ()=>{
            return unSubcriber
        }
    },[axiosPublic])
    const AuthInfo ={
        userRegister,
        userLogin,
        userLogout,
        user,
        loding
    }
    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Provider;