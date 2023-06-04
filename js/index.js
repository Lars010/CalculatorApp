let currentResult = '';

function appendNumber(number) {
  currentResult += number;
  updateResult();
}

function operation(operator) {
  currentResult += operator;
  updateResult();
}

function calculate() {
  try {
    const result = eval(currentResult);
    currentResult = result.toString();
    updateResult();
  } catch (error) {
    currentResult = 'Error';
    updateResult();
  }
}

function clearResult() {
  currentResult = '';
  updateResult();
}

function updateResult() {
  const resultElement = document.getElementById('result');
  resultElement.value = currentResult;
}