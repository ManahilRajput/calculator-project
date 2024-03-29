#!/usr/bin/env node

import inquirer from "inquirer";

let morecal=true;
while (morecal) {
    
const input = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter Your First Number"
    },
    {
        type:"number",
        name:"num2",
        message:"Enter YOur First Number"
    },
    {
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division","Remainder","Exponent"],
        message:"enter any operation to perform your desired operation here!!"
    },
])

const num1=input.num1;
const num2=input.num2;
const operator=input.operator;

if (operator==="Addition") {
    console.log(` the Answer Of ${num1}+${num2} is ${num1+num2}`);

}else if (operator==="Subtraction") {
    console.log(` the Answer Of ${num1}-${num2} is ${num1-num2}`);

}else if (operator==="Multiplication") {
    console.log(` the Answer Of ${num1}*${num2} is ${num1*num2}`);

}else if (operator==="Division") {
    console.log(` the Answer Of ${num1}/${num2} is ${num1/num2}`);

}else if (operator==="Remaider") {
    console.log(`the Answer Of ${num1}%${num2} is ${num1%num2}`);

}else if (operator==="Exponent") {
    console.log(` the Answer Of ${num1}**${num2} is ${num1**num2}`);

}else {
    console.log("please enter a valid number");
}


const calculatemore=await inquirer.prompt([
    {
        type:"confirm",
        name:"more",
        message:"Do You Want More Calculation?",
        default:false
    },
])

if (!calculatemore.more) {
    morecal=false;
    console.log("thank you for your attention!! ")
}
}