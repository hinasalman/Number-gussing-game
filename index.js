#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        type: "number",
        name: "userguessnumber",
        message: "please guess a number between 1 and 10"
    }]);
console.log(answer);
if (answer.userguessnumber === randomnumber) {
    console.log("congrats you guess right number");
}
else {
    console.log("sorry you guess wrong number");
}
