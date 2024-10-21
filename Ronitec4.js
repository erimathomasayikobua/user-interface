// controllers/paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    const { amount, token } = req.body;

    try {
        const charge = await stripe.charges.create({
            amount: amount * 100, // in cents
            currency: 'usd',
            source: token.id,
            description: 'Wi-Fi portal payment',
        });

        res.json(charge);
    } catch (error) {
        console.error(error);
        res.status(500).send('Payment error');
    }
};


