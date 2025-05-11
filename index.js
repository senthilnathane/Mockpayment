    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd', // Change to your preferred currency
    });

    // Send the client secret of the payment intent to the frontend
    res.send({ clientSecret: paymentIntent.client_secret });
} catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Payment creation failed' });
}
