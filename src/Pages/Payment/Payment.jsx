import { Elements } from "@stripe/react-stripe-js";
import DasTtle from "../../Shred/DasTitle/DasTtle";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure"

const elementsPromise = loadStripe("pk_test_51OEvv1AD2BmhwX6YVZp9OpeQSjRYijAgScIRd2rZ83oxjo7c2lEDKIo3Q0TBSW8BX2crr5SUQIf79jZlAFwnipP700Kr8taFYZ")
const Payment = () => {
    const paymentData = useLoaderData()
    console.log(paymentData)
    const [clintSecret, setClintSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        axiosSecure.post("/create-payment-intent",{price:paymentData.price})
        .then(res=>{
            console.log(res.data)
            setClintSecret(res.data?.clientSecret)
        })
    },[axiosSecure,paymentData])
    return (
        <div className=" h-screen">
            <DasTtle
            hadding="Payment"
            subhading="CheckOut now"
            >
            </DasTtle>
            <div className=" w-1/2 mx-auto bg-gray-800 p-10">
                
                <Elements stripe={elementsPromise}>
                        <CheckOut clintSecret={clintSecret} paymentData={paymentData}></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;