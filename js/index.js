const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const userInput = document.getElementById("input-number");
const input2 = document.getElementById("num2");
const addBtn = document.getElementById("btn-add");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const subtractBtn = document.getElementById("btn-subtract");


const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

const outputResult=(result, text)=>{
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;

}




