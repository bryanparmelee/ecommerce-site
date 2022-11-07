import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../button/button.component";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return; 
        }

        

    }
    return (
        <div className="h-80 flex flex-col items-center justify-center">
            <div>
                <h2>Pay with card:</h2>
                <CardElement />
                <Button>Pay Now</Button>
            </div>
        </div>
    )
}


export default PaymentForm; 