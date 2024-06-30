document.addEventListener('DOMContentLoaded', () => {
    // Wait until the DOM is fully loaded before running the script
  
    // Get the display element where the numbers and results will be shown
    const display = document.getElementById('display');
  
    // Get all buttons with the class 'btn' and store them in a NodeList
    const buttons = document.querySelectorAll('.btn');
  
    // Iterate over each button in the NodeList
    buttons.forEach(button => {
      // Add a click event listener to each button
      button.addEventListener('click', () => {
        // Get the text content of the clicked button
        const value = button.textContent;
  
        // Check the value of the button and perform the corresponding action
        if (value === 'C') {
          // If 'C' button is clicked, clear the display
          display.textContent = '';
        } else if (value === '←') {
          // If '←' button is clicked, remove the last character from the display
          display.textContent = display.textContent.slice(0, -1);
        } else if (value === '=') {
          // If '=' button is clicked, evaluate the expression in the display
          try {
            // Try to evaluate the expression using the eval function
            display.textContent = eval(display.textContent);
          } catch {
            // If there is an error during evaluation, display 'Error'
            display.textContent = 'Error';
          }
        } else {
          // For all other buttons, append their value to the display
          display.textContent += value;
        }
      });
    });
  });
  