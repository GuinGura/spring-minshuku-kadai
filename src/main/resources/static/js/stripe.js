const stripe = Stripe(pk_test_51Qs0EWQ57R136RDNITjiCNgfgiZgShIPb3WT8P2xYRRCDy4JL7PAUVAyavtrUFQjhWBkOWZa76gUXYK590ERDxor00vAQGEimg);
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
stripe.redirectToCheckout({
sessionId: sessionId
})
});