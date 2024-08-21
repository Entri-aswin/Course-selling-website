import express from "express";
import Stripe from "stripe";
import { authUser } from "../../middlewares/authUser.js";
const router = express.Router();

const client_domain = process.env.CLIENT_DOMAIN;

const stripe = new Stripe(process.env.Stripe_Private_Api_Key);

router.post("/create-checkout-session", async (req, res, next) => {
    try {
        const { products } = req.body;

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.name,
                    images: [product.image],
                },
                unit_amount: Math.round(product.price * 100),
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${client_domain}/user/payment/success`,
            cancel_url: `${client_domain}/user/payment/cancel`,
        });

        console.log('sessionId====',session.id);
        

        res.json({ success: true, sessionId: session.id });
    } catch (error) {
        res.status(error.statusCode || 500).json(error.message || "internal server error");
    }
});

router.get("/session-status", async (req, res) => {
    try {
        const sessionId = req.query.session_id;
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        res.send({
            status: session?.status,
            customer_email: session?.customer_details?.email,
            session
        });
    } catch (error) {
        res.status(error?.statusCode || 500).json(error.message || "internal server error");
    }
});

export default router;
