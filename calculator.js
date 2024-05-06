let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); 
let string = ""; 
let arr = Array.from(buttons); //creates array for the buttons. 
arr.forEach(button => { //Loops through each button in the array & adds event listeners for click events. 
    button.addEventListener('click', (e) => { 
        // Checks which button is clicked and performs corresponding actions
        if (e.target.innerHTML == '=') {
            // If the button is '=', evaluates the expression and updates the input value
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            // If the button is 'AC', clears the input
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            // If the button is 'DEL', removes the last character from the input
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            // For other buttons (numbers and operators), appends them to the input
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});