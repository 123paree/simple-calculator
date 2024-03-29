import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {type:"number", name: "num1", message: "Enter num1"},
    {type:"number", name: "num2", message: "Enter num2"},
    {
        type: "list",
        name: "operators",
        message: "Select one of the operator",
        choices: ["+", "-", "*", "/", "%"],
    },

]);
if (answer.operators === "+") {
   console.log((answer.num1 + answer.num2).toFixed(2));
}
else if (answer.operators === "-") {
    console.log((answer.num1 - answer.num2).toFixed(2));
}
else if (answer.operators === "*") {
    console.log((answer.num1 * answer.num2).toFixed(2));
}
else if (answer.operators === "/") {
    console.log((answer.num1 / answer.num2).toFixed(2));
}
else if (answer.operators === "%") {
    console.log(answer.num1 % answer.num2);
}
else {
    console.log("Please select valid operator");
}