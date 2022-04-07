require("dotenv").config(); //Loads all the .env variables into local environment.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // stripe gets access to secret key from the current environment.

exports.handler = async (event) => {
  try {
    const { amount } = event.body;

    //creating a payment intent. Information about an upcoming Payment to stripe.
    const paymentIntent = await stripe.paymentIntent.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      status: 200,
      body: JSON.stringify(paymentIntent),
    };
  } catch (error) {
    return {
      status: 400,
      body: JSON.stringify(error),
    };
  }
};
