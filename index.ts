type Currency = "USD" | "EUR" | "GBP";

interface Payment {
    paymentId: string;
    payeeId: string;
    amount: number;
    currency: Currency;
}

interface ValidationResult {
    valid: boolean;
    errors: string[];
}

function validatePayment(payment: Payment): ValidationResult {
    const errors: string[] = [];

    if (payment.paymentId.trim() === "") {
        errors.push("paymentId is required");
    }

    if (payment.payeeId.trim() === "") {
        errors.push("payeeId is required");
    }

    if (!Number.isFinite(payment.amount) || payment.amount <= 0) {
        errors.push("amount must be greater than zero");
    }

    const allowedCurrencies: Currency[] = ["USD", "EUR", "GBP"];

    if (!allowedCurrencies.includes(payment.currency)) {
        errors.push("currency must be USD, EUR, or GBP");
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

const payment: Payment = {
    paymentId: "1",
    payeeId: "emurrey",
    amount: 250000,
    currency: "USD"
};

const result = validatePayment(payment);

console.log(result);