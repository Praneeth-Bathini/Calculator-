let display = document.getElementById("display");
let result = document.getElementById("result");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(operator) {
  display.value += operator;
}

function calculate() {
  try {
    result.textContent = eval(display.value);
  } catch (error) {
    result.textContent = "Error";
  }
}

function square() {
  try {
    let num = parseFloat(display.value);
    result.textContent = num * num;
  } catch (error) {
    result.textContent = "Error";
  }
}

function clearDisplay() {
  display.value = "";
  result.textContent = "";
}