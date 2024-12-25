let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

// Event listener for click and touch events to start the game
document.addEventListener("click", startGame);
document.addEventListener("touchstart", startGame);

function startGame() {
    if (!started) {
        document.getElementById("level-title").textContent = "Level " + level;
        nextSequence();
        started = true;
    }
}

// Event listener for button clicks
let buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
    });
});

// Function to check if the user's answer is correct
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        document.body.classList.add("game-over");
        document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";

        setTimeout(function() {
            document.body.classList.remove("game-over");
        }, 200);

        startOver();
    }
}

// Function to generate the next sequence in the game
function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").textContent = "Level " + level;


    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    let button = document.getElementById(randomChosenColour);
    button.classList.add("fade-in-out");
    setTimeout(function() {
        button.classList.remove("fade-in-out");
    }, 300);

    playSound(randomChosenColour);
}



// Function to animate button press
    function animatePress(currentColour) {
        // Select the button with the id that matches currentColour
        let button = document.getElementById(currentColour);
        button.classList.add("pressed");
        // Remove the class after the animation duration
        setTimeout(function() {
            button.classList.remove("pressed");
        }, 100);
    }

// Function to play sound
    function playSound(name) {
        let audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

// Function to restart the game
    function startOver(){
        level = 0;
        gamePattern = [];
        started = false;
    }



