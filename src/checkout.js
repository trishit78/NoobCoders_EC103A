import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
  const publishableKey = 'pk_test_51OGScoSAPb0BxvlMpAuY5ff2WT2atTKnLtCkEin0QrpdVZ5XtKIxn2V5inFvgidJTN6ZqQ7bpmYLavnBZq5hGrtm00SURtDsAr';

  const onToken = (token) => {
    // You can handle the token here (e.g., send it to your server for processing)
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay with Stripe"
      name="Your Company Name"
      description="Purchase Description"
      amount={1000} // Amount in cents
      currency="USD"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default Checkout;