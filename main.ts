#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 50000; //Dollar
let myPin = 2222;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
// 1234 ==== 2222, false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance","Fastcash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "enter you amount",
                type: "number" },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Fund");
        }
        else if (amountAns.amount == myBalance) {
            console.log("Your Remaining Balance Is: " + 0);
        }
        else if (myBalance -= amountAns.amount) {
            console.log("Your Remainig Balance Is: " + `${myBalance}`);
        }
      }
  if (operationAns.operation === "Fastcash"){
     let Fastcashoptions =   ["5000", "10000", "20000", "30000", "50000"];
     let FastcashAns = await inquirer.prompt(
      [
        {name: "options",
         message : "select Fastcash option",
         type:"number",
         choices: [5000, 10000, 20000, 30000, 50000]}
        ]
        );
        if (FastcashAns.option <= myBalance) {
          myBalance -= FastcashAns.option;
          console.log("FastCash transaction successful. Your remaining balance is:" + myBalance);
      } else {
          console.log("Insufficient balance for FastCash transaction.");
      }
  
      }
         
    else if (operationAns.operation === "Check Balance") {
        console.log("your balance is: " + `${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
