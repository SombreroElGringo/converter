# Converter

Convert internal type objects in external types.

## Commands

```typescript
// Build the application.
yarn build

// Run the application.
yarn start

//Run the application without building the application.
yarn dev

// Run the tests
yarn test
```

## Questions

1. How much time it took to complete

In total I spent 50 min to work on this exercice, here is a better view how I spent my time:

- 20 minutes to complete the main task
- 20 minutes adding mocks, tests and comments
- 10 minutes answering the questions.

2. Your overall thoughts on the exercice

Personally, I like it when a company comes up with a real life problem as an exercise because it will tell you more about how the person works, how they solve the problem and etc... than an algorithm that you have to solve in less than 30 minutes.

3. Identify what is lacking in the task definition

Some information is missing on the format of certain data such as the date of the purchase item or the date of birth. Also, since we are working with an external type, we can guess that it belongs to an external API, so we need to think about how we should handle the error if a new property has been posted in their schema, etc.

4. Whether the solution is complete? Whether it is optimized or solved through brute force?

The solution is complete, it provides utils functions to convert internal type to external type. There is still room to optimize the utils function, for example by using the `for` loop instead of `map`.
