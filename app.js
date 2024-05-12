#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
console.log(chalk.greenBright(`________________________________________________________________________________________________________`));
console.log(chalk.yellowBright.bold.italic(`
                        *******                       QUIZ APP                   ******                      `));
console.log(chalk.greenBright(`________________________________________________________________________________________________________`));
let quiz = await inquirer.prompt([
    {
        name: 'q1',
        type: 'list',
        message: 'What does TypeScript provide on top of JavaScript',
        choices: ['A) Strongly-typed system', 'B) Dynamic typing', 'C) No typing system', 'D) Weakly-typed system']
    },
    {
        name: 'q2',
        type: 'list',
        message: 'Which keyword is used to declare a variable in TypeScript that may have its value changed later',
        choices: ['A) const', 'B) final', 'C) let', 'D) var']
    },
    {
        name: 'q3',
        type: 'list',
        message: 'What is the file extension of TypeScript files',
        choices: ['A) .ts', 'B) .js', 'C) .txt', 'D) .tsx']
    },
    {
        name: 'q4',
        type: 'list',
        message: 'Which data type represents a collection of elements',
        choices: ['A) array', 'B) string', 'C) number', 'D) boolean']
    },
    {
        name: 'q5',
        type: 'list',
        message: 'Which command is used to compile TypeScript files',
        choices: ['A) tsc', 'B) gcc', 'C) javac', 'D) node']
    },
    {
        name: 'q6',
        type: 'list',
        message: 'What is the purpose of the type keyword in TypeScript',
        choices: ['A) to declare a new data type', 'B) to create a loop', 'C) to define a new function', 'D) to import modules']
    },
    {
        name: 'q7',
        type: 'list',
        message: 'How can you declare a constant in TypeScript',
        choices: ['A) using the var keyword', 'B) using the let keyword', 'C) using the const keyword', 'D) using the static keyword']
    },
    {
        name: 'q8',
        type: 'list',
        message: 'What is TypeScripts role in a development environment',
        choices: ['A) It is a server-side language', 'B) It compiles down to JavaScript', 'C) It is primarily used for styling', 'D) It enhances HTML functionality']
    },
    {
        name: 'q9',
        type: 'list',
        message: 'Which keyword is used to import modules in TypeScript',
        choices: ['A) require', 'B) import', 'C) include', 'D) use']
    },
    {
        name: 'q10',
        type: 'list',
        message: 'Which TypeScript feature allows you to enforce type checking at compile-time',
        choices: ['A) Strict Mode', 'B) Dynamic Typing', 'C) Loose Mode', 'D) Implicit Typing']
    },
]);
let answer1 = quiz.q1;
let answer2 = quiz.q2;
let answer3 = quiz.q3;
let answer4 = quiz.q4;
let answer5 = quiz.q5;
let answer6 = quiz.q6;
let answer7 = quiz.q7;
let answer8 = quiz.q8;
let answer9 = quiz.q9;
let answer10 = quiz.q10;
if (answer1 === 'A) Strongly-typed system') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`1 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`1 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer2 === 'C) let') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`2 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`2 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer3 === 'A) .ts') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`3 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`3 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer4 === 'A) array') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`4 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`4 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer5 === 'A) tsc') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`5 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`5 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer6 === 'A) to declare a new data type') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`5 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`5 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer7 === 'C) using the const keyword') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`5 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`5 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer8 === 'B) It compiles down to JavaScript') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`5 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`5 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer9 === 'B) import') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`5 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`5 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (answer10 === 'A) Strict Mode') {
    score = score + 1;
    console.log(chalk.greenBright.bold.italic(`5 : ✅✅✅...Correct Answer...✅✅✅`));
}
else {
    console.log(chalk.redBright.bold.italic(`5 : ❌❌❌...Incorrect Answer...❌❌❌`));
}
;
if (score <= 5) {
    console.log(chalk.bgMagentaBright.italic.bold(`Your score is 10 out of 😭😭😭!! ${score} !!😭😭😭 You needs more practice`));
}
if (score > 5) {
    console.log(chalk.bgGreenBright.italic.bold(`Your score is 10 out of 🤩🤩🤩!! ${score} !!🤩🤩🤩 Welldone! Keep it up`));
}
