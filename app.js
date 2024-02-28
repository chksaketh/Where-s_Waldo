const StartingMinutes = 1;
        let time = StartingMinutes * 60;

        const countdownEl = document.getElementById('Count-Down');

        const countdownInterval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            // Add a leading zero to seconds if it's a single digit
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            countdownEl.innerHTML = `${minutes}:${seconds}`;

            if (time <= 0) {
                clearInterval(countdownInterval); // Stop the countdown when time reaches 0
                countdownEl.innerHTML = '0:00'; // Display "0:00" when the countdown is complete
            }

            time--;
        }


//scoring part.


// Scoring part for the first button and points display
let points1 = 0;
let points2 = 0;
let points3 = 0;
let points4 = 0;
let pointsAdded = [false, false, false, false]; // Track if points have been added for each button

// Get the button elements
const incrementButton1 = document.querySelector(".incrementButton1");
const incrementButton2 = document.querySelector(".incrementButton2");
const incrementButton3 = document.querySelector(".incrementButton3");
const incrementButton4 = document.querySelector(".incrementButton4");

// Get the points elements
const pointsDisplay1 = document.getElementById("Points1");
const pointsDisplay2 = document.getElementById("Points2");
const pointsDisplay3 = document.getElementById("Points3");
const pointsDisplay4 = document.getElementById("Points4");

// Function to handle points increment for each button
function handleIncrement(points, pointsDisplay, index) {
    if (!pointsAdded[index]) {
        // Increment the points by 100
        points += 100;
        // Update the points display for the button
        pointsDisplay.textContent = points;
        pointsAdded[index] = true;
    }
}

// Add a click event listener for each button
incrementButton1.addEventListener("click", function () {
    handleIncrement(points1, pointsDisplay1, 0);
});

incrementButton2.addEventListener("click", function () {
    handleIncrement(points2, pointsDisplay2, 1);
});

incrementButton3.addEventListener("click", function () {
    handleIncrement(points3, pointsDisplay3, 2);
});

incrementButton4.addEventListener("click", function () {
    handleIncrement(points4, pointsDisplay4, 3);
});


//You lose part

// Function to open a pop-up
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

// Function to close a pop-up
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// Update the existing updateCountdown function to show the "You Lose" pop-up
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Add a leading zero to seconds if it's a single digit
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    countdownEl.innerHTML = `${minutes}:${seconds}`;

    if (time <= 0) {
        clearInterval(countdownInterval); // Stop the countdown when time reaches 0
        countdownEl.innerHTML = '0:00'; // Display "0:00" when the countdown is complete
        openPopup('popup-lose'); // Show the "You Lose" pop-up
    }

    time--;
}

// Initially, hide the "You Lose" popup
closePopup('popup-lose');


//Winning.
let buttonsClicked = 0;
function handleIncrement(points, pointsDisplay, index) {
    if (!pointsAdded[index]) {
        points += 100;
        pointsDisplay.textContent = points;
        pointsAdded[index] = true;

        buttonsClicked++; // Increment the counter

        if (buttonsClicked === 4) {
            openPopup('popup-win'); // Show the "You Win" pop-up when all buttons are clicked
        }
    }
}
closePopup('popup-win');


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Add a leading zero to seconds if it's a single digit
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    countdownEl.innerHTML = `${minutes}:${seconds}`;

    if (time <= 0) {
        clearInterval(countdownInterval); // Stop the countdown when time reaches 0
        countdownEl.innerHTML = '0:00'; // Display "0:00" when the countdown is complete

        if (buttonsClicked < 4) {
            openPopup('popup-lose'); // Show the "You Lose" pop-up if not all buttons are clicked
        }
    }

    time--;
}



