import test from "node:test";
import assert from "node:assert/strict";
import { validatePayment } from "./dist/validator.js";

test("valid payment passes validation", () => {
    const payment = {
        paymentId: "1",
        payeeId: "emurrey",
        amount: 250000,
        currency: "USD"
    };

    const result = validatePayment(payment);

    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, []);
});

test("zero amount fails validation", () => {
    const payment = {
        paymentId: "1",
        payeeId: "emurrey",
        amount: 0,
        currency: "USD"
    };

    const result = validatePayment(payment);

    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("amount must be greater than zero"));
});

test("empty paymentId fails validation", () => {
    const payment = {
        paymentId: "",
        payeeId: "emurrey",
        amount: 250000,
        currency: "USD"
    };

    const result = validatePayment(payment);

    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("paymentId is required"));
});

test("empty payeeId fails validation", () => {
    const payment = {
        paymentId: "1",
        payeeId: "",
        amount: 250000,
        currency: "USD"
    };

    const result = validatePayment(payment);

    assert.equal(result.valid, false);
    assert.ok(result.errors.includes("payeeId is required"));
});