const { Stripe } = require("stripe");

require("dotenv").config();

var stripe = new Stripe(process.env.STRIPE_KEY);

module.exports = stripe;