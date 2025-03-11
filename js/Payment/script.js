document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("paymentForm");

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // In a real app, handle payment processing here
    alert("Payment successful!");
    window.location.href = "/payment-success";
  });
});