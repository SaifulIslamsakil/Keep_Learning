import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { AuthContex } from "../../Provider/Provider";
import useAxiosPulic from "../../Hooks/useAxiosPulic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ clintSecret, paymentData }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useContext(AuthContex)
    const [AxiosPublic] = useAxiosPulic()
    const navigate= useNavigate()

    const hendelSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return console.log("error one")
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return console.log("erro tow")
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log(error)
        }
        if (paymentMethod) {
            console.log(paymentMethod)
        }

        const { Error, paymentIntent } = await stripe.confirmCardPayment(clintSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email
                }
            }
        })
        if (Error) {
            console.log(Error)
        }
        if (paymentIntent.status === "succeeded") {
            const purchessCoruseInfo = {
                Category: paymentData.Category,
                Experince: paymentData.Experince,
                crouse_id: paymentData.crouse_id,
                email: user.email,
                img: paymentData.img,
                name:paymentData.name,
                title: paymentData.title
            }
            AxiosPublic.post("/Purchess-Coruse-info", purchessCoruseInfo)
                .then(res => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            title: "Thanks you!",
                            text: "Sucessesfully paying!",
                            icon: "success"
                        });
                        navigate("/")
                    }
                })

        }

    }
    return (
        <form onSubmit={hendelSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            color: 'white',
                            border: "5px",
                            '::placeholder': {
                                color: 'white',
                            },
                        },

                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className=" flex justify-center">
                <button type="submit" className=" mt-10 btn px-10 border-none py-3 text-white bg-green-500 hover:bg-green-800 my-2" disabled={!stripe}>
                   pay now
                </button>
            </div>
        </form>
    );
};

export default CheckOut;