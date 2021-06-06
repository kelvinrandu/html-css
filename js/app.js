let currentResult = 1;

function getUserInput() {
  return parseInt(userInput.value);
}
function createWriteOutput(operator, resultsBefore, calcNumber) {
  const current = `${resultsBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, current);
}
const add = () => {
  const userNumber = getUserInput();
  const current = currentResult;
  currentResult += userNumber;
  createWriteOutput("+", current, userNumber);
};
const subtract = () => {
  const userNumber = getUserInput();
  const current = currentResult;
  currentResult -= userNumber;
  createWriteOutput("-", current, userNumber);
};
const multiply = () => {
  const userNumber = getUserInput();
  const current = currentResult;
  currentResult *= userNumber;
  createWriteOutput("*", current, userNumber);
};
const divide = () => {
  const userNumber = getUserInput();
  const current = currentResult;
  currentResult /= userNumber;
  createWriteOutput("/", current, userNumber);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
