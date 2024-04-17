#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n \t Welcome to Code-with-Ayesha-Sikander - Currency-Convertor-Cli \n"));
let conversation = {
    "PKR": {
        "USD": 277.83,
        "GBP": 0.0029,
        "SAR": 0.0013,
        "PKR": 1
    },
    "USD": {
        "GBP": 0.79,
        "PKR": 277.83,
        "SAR": 3.75,
        "USD": 1
    },
    "GBP": {
        "SAR": 4.73,
        "USD": 1.26,
        "PKR": 350.35,
        "GBP": 1
    },
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.magenta("Select your Currency"),
        type: "list",
        choices: ["PKR", "USD", "GBP"]
    },
    {
        name: "to",
        message: chalk.grey("Select your Conversation Currency"),
        type: "list",
        choices: ["PKR", "USD", "GBP"]
    },
    {
        name: "amount",
        message: chalk.blue("Enter your Conversation amount"),
        type: "number",
    }
]);
let { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversation[from][to] * amount;
    console.log(chalk.green(`Your Conversation ${from} to ${to} is ${result}`));
}
else {
    console.log(chalk.red("Invalid Inputs"));
}
