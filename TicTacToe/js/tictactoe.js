// Variable keeps track of who's turn it is
let activePlayer = 'X';
// Array stores array of moves and derermines win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    // This ensures a square hasn't been selected already
    // The .some() method is used to check each element of selectedSquare array
    // To see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // Retrieves the html elemnet id that was clicked
        let select = document.getElementById(squareNumber);
        // Checks whos turn it is
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X' then the X picture is place on the board
            select.style.backgroundImage = 'url("./images/X.jpg")';
        // Active player can only be either X or O
        } else {
            // If activePlayer is equal to 'O' place the O picture on the board
            select.style.backgroundImage = 'url("./images/O.jpg")';                      // ------------- pretty sure these pictures wont work
        }
        // squareNumber and activePlayer are concatenated together and added to the array
        selectedSquares.push(squareNumber + activePlayer);
        // Call a function to check for win conditions
        checkWinConditions();
        // Changes the active player
        if (activePlayer === 'X') {
            // If player is X change to O
            activePlayer = 'O';
            // If active player is anything other than X change to X
        } else {
            activePlayer = 'X';
        }


        // Sound placement
        audio('./media/New_Place.wav');                // ------------------------- double check the file path here as well
        // Checks for computer turn
        if(activePlayer === 'O') {
            // Disable computer player click sound
            disableClick();
            // Enables click and waits one second to place the picture
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning true is needed for our computersTurn() to function
        return true;
    }

    // Function results in random square being picked
    function computersTurn() {
        // Boolean needed for our while loop
        let success = false;
        // Stores a random number 0-8
        let pickASquare;
        // Lets while loop keep going until a square is picked that is empty
        while(!success) {
            // A random number 0-8 is picked
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the check comes back true is square is empty
            if (placeXOrO(pickASquare)) {
                // This line calls the function
                placeXOrO(pickASquare);
                // This changes the boolean and ends the loop
                success = true;
            };
        }
    }
} 


// Parses the selectedSquares array to check for win conditions
// Then will draw a line threw the winning line
function checkWinConditions() {
    // X 0, 1, 2 condition
    if       (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    // X 3, 4, 5 condition
    else if  (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    // X 6, 7, 8 condition
    else if  (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    // X 0, 3, 6 condition
    else if  (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    // X 1, 4, 7 condition
    else if  (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    // X 2, 5, 8 condition
    else if  (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    // X 6, 4, 2 condition
    else if  (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    // X 0, 4, 8 condition
    else if  (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    // O 0, 1, 2 condition
    else if  (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    // O 3, 4, 5 condition
    else if  (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    // O 6, 7, 8 condition
    else if  (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    // O 0, 3, 6 condition
    else if  (arrayIncludes('0O','3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    // O 1, 4, 7 condition
    else if  (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    // O 2, 5, 8 condition
    else if  (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    // O 6, 4, 2 condition
    else if  (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    // O 0, 4, 8 condition
    else if  (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    // Checks for a tie, if none of the above conditions register and 9 squares are filled the executes
    else if (selectedSquares.length >= 9) {
        // Tie game sound
        audio('./media/New_Tie.wav');                                                         // -------------------- double check audio caps
        // Sets a .3 second timer before resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    // Checks if an array includes 3 strings, used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        // Used to check for three in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variables we pass are in the array true is returned and our else condition executes the drawWinLine function
        if (a === true && b === true && c === true) { return true; }
    }
}

// Makes the body temp unavail to click
function disableClick() {
    // Makes it unclickable
    body.style.pointerEvents = 'none';
    // Clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// Takes the string parameter of the path earlier for placement sound
function audio(audioURL) {
    // Create a new audio object and pass the pass as the parameter
    let audio = new Audio(audioURL);
    // Play method plays the sound
    audio.play();
}

// This function uses the canvas to draw the win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line has access to our html canvas element
    const canvas = document.getElementById('win-lines');
    // Gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    // Indicates where the start of a lines x axis is
    let x1 = coordX1,
        // start of a lines y axis
        y1 = coordY1,
        // end of a lines x axis
        x2 = coordX2,
        //end of a lines y axis
        y2 = coordY2,
        // Stores temporary x axis data we update in the animation loop
        x = x1,
        // Stores temporary y axis data we update in the animation loop
        y = y1;

        // This function interacts with the canvas
        function animateLineDrawing() {
            // Variable creates the end game/restart loop
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            // Method clears content from last loop iteration
            c.clearRect(0, 0, 608, 608);
            // Starts a new path
            c.beginPath();
            // Moves to the starting point of the line
            c.moveTo(x1, y1);
            // End point of the line
            c.lineTo(x, y);
            // Set width of the line
            c.lineWidth = 10;
            // Sets the color of the line
            c.strokeStyle = 'rgba(70, 255, 33, .8)';
            // This methods draws the stuff
            c.stroke();
            // Checks if we have reached the end point
            if (x1 <= x2 && y1 <= y2) {
                // Adds 10 to the previous end x point
                if (x < x2) { x += 10; }
                // adds 10 to the previous end y point
                if (y < y2) { y += 10; }
                // Stops the animation once it reaches the end point
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
        }

        // Clears the canvas after the win line has been drawn
        function clear() {
            //Starts out animation loop
            const animationLoop = requestAnimationFrame(clear);
            // Clears the canvas
            c.clearRect(0, 0, 608, 608);
            // Stops the animation loop
            cancelAnimationFrame(animationLoop);
        }
        // Disallow click when win sound is playing
        disableClick();
        // Plays the win sound
        audio('./media/Win.wav');
        // Calls the main animation loop
        animateLineDrawing();
        // Waiting 1 second, clears canvas, resets game and allows clicking
        setTimeout(function () { clear(); resetGame() ; }, 1000);
    }

    // Resets the game in a tie or a win
    function resetGame() {
        // This for loop iterates through
        for (let i = 0; i < 9; i++) {
            // Gets the HTML of i
            let square = document.getElementById(String(i));
            // Removes background images
            square.style.backgroundImage = '';
        }
        // Resets the array so the game can start over
        selectedSquares = [];
    }