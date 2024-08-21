import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { axiosInstance } from "../../config/axiosInstance";

const products = [
    {
        id: "123",
        name: "MERN course",
        price: "200",
        image: "https://gaper.io/wp-content/uploads/2022/02/mern-stack.webp",
        quantity: 2,
    },
    {
        id: "345",
        name: "Python course",
        price: "5000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8h_BUGp_0Yxt_QUeBeMu32g4kvJ6deNMW5g&s",
        quantity: 1,
    },
];
export const CartPage = () => {
    const makePayment = async () => {
        try {
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

            const response = await axiosInstance({
                url: "/payment/create-checkout-session",
                method: "POST",
                data: { products },
            });
            console.log(response.data, "=======response.data");

            const sessionId = response?.data?.sessionId;

            const result = stripe.redirectToCheckout({
                sessionId: sessionId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="px-20 py-10">
            <h1 className="text-4xl font-bold mb-10">CartPage</h1>

            <div>
                {products.map((product) => (
                    <div key={product.id} className="bg-base-300 mb-5 flex gap-5">
                        <img className="w-20 h-24 object-cover" src={product.image} alt="product-img" />
                        <h3>{product.name} </h3>
                        <h4>RS: {product.price} </h4>
                        <h4>Quantity: {product.quantity}</h4>
                    </div>
                ))}
            </div>

            <div>
                <button onClick={makePayment} className="btn btn-success">
                    Checkout
                </button>
            </div>
        </div>
    );
};
