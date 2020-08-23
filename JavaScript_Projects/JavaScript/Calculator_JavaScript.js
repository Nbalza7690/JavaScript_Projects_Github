// Creates an object to keep track of the values

const Calculator = {
    // This displays 0 to the screen
    Display_Value: '0',
    // Hold the first operand for any expressions, null for now
    First_Operand: null,
    // Checks for 2nd operand input
    Wait_Second_Operand: false,
    // Holds the operator, null for now
    operator: null,
};

// Modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // Checking to see if Wait_Second_Operand is true and set Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // Overwrites Display_Value if current value is 0 otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
// Section handles decimal points
function Input_Decimal(dot) {
    // Ensures that accidental decimal point clicking wont cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // If there is no decimal point we add one
        Calculator.Display_Value += dot;
    }
}

// Section handles operators

function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // When an operator key is pressed we convert the current number displayed to a number and store the result in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // Checks if an operator already exists and if Wait_Second_Operand is true then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // Checks if an operator already exists
        const Value_Now = First_Operand || 0 ;
        // If Operator exists property lookup is preformed for the operator in the Preform_Calculation object and the function that matches the operator is executed
        let result = Preform_Calculation[operator](Value_Now, Value_of_Input);
        // Here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        // Removes any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}


// Where calculations happen

const Preform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// Updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// Monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // The target variable is an object that represents the element that was clicked
    const { target } = event;
    // If the element that was clicked on exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // Ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})