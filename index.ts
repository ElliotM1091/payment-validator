import { validatePayment, type Payment } from "./validator.js";

const payment: Payment = {
    paymentId: "1",
    payeeId: "emurrey",
    amount: 250000,
    currency: "USD"
};

const result = validatePayment(payment);

console.log(result);