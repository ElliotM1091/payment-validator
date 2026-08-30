## PaymentValidator 

A small TypeScript project that validates payment request data before processing it.

## Purpose of code:

This project was created as a code sample to demonstrate input validation
TypeScript types, error handling, and clear program structure.

## Validation Rules

A payment is considered valid when:

`paymentId` is not empty
`payeeId` is not empty
`amount` is a finite number greater than zero
`currency` is one of the supported values: USD, EUR, or GBP

The validator collects all validation errors rather than stopping after the first one.

## Technologies

- TypeScript
- Node.js
- npm

## Running the Project

Install dependencies:

npm install

Compile the TypeScript:

npm run build

Run the compiled JavaScript:

node dist/index.js

## Running Tests

Compile the TypeScript:

npm run build

Run the automated tests:

npm test

## Design Decisions

I used a TypeScript union type for supported currencies so unsupported values can be
caught during development.

The validator returns a `ValidationResult` object containing both a boolean `valid`
value and an array of errors so multiple problems can be reported at once.

## Future Improvements

- Add automated unit tests
- Separate validation logic from example/test data
- Validate raw external input before converting it into a typed `Payment`
- Expand supported currencies and business rules