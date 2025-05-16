const display = document.getElementById('display');

// Append clicked value
function appendValue(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = '';
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and display result
function calculate() {
  try {
    if (display.value.includes('/0')) {
      display.value = "Can't divide by zero!";
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = 'Error';
  }
}

// Square root function
function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Add keyboard support
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
