#!/usr/bin/env node
import inquirer from 'inquirer';

let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "PKR": 1,
        "GBP": 0.0029,
        "EUR": 0.0034,
    },
    "USD": {
        "PKR": 277.95,
        "USD": 1,
        "GBP": 0.80,
        "EUR": 0.94,
    },
    "GBP": {
        "PKR": 345.89,
        "USD": 1.24,
        "GBP": 1,
        "EUR": 1.17,
    },
    "EUR": {
        "PKR": 295.41,
        "USD": 1.06,
        "GBP": 0.85,
        "EUR": 1,
    },
};

(async () => {
    const answer: {
        from: "PKR" | "EUR" | "USD" | "GBP",
        to: "PKR" | "EUR" | "USD" | "GBP",
        AMOUNT: number,
    } = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Select your currency",
        choices: ["PKR", "USD", "GBP", "EUR"],
    },
    {
        type: "list",
        name: "to",
        message: "Select your currency rate",
        choices: ["PKR", "USD", "GBP", "EUR"],
    },
    {
        type: "number",
        name: "AMOUNT",
        message: "Enter the amount to convert",
    },
    ]);

    const { from, to, AMOUNT } = answer;

    if (from && to && AMOUNT) {
        let result = AMOUNT * currencyConversion[from][to];
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    } else {
        console.log("Invalid conversion");
    }
})();
