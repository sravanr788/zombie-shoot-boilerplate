// Iteration 1: Declare variables required for this game
let gameBody = document.getElementById("game-body")
let timerBox = document.getElementById("timer")
let zombieId = 0;

let zombieImages =[
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
]

// Iteration 1.2: Add shotgun sound

let shotgun = new Audio("./assets/shotgun.wav")
gameBody.onclick = () => {
    shotgun.pause();
    shotgun.currentTime = 0;
    shotgun.play();
}
// Iteration 1.3: Add background sound
let bgmi = new Audio("./assets/bgm.mp3");
bgmi.play();
bgmi.loop = true;

// Iteration 1.4: Add lives
let lives = 4;
// Iteration 2: Write a function to make a zombie
function makeZombie(){
    let zombie = document.createElement("img");
    let zomImg = zombieImages[getRandomint(0,zombieImages.length )]
    zombie.src = ./assets/${zomImg};                    // getting random imagesv of zombie
    zombie.classList.add("zombie-image");
    zombie.id = zombie${zombieId};
    zombie.style.transform = translateX(${getRandomint(10,90)}vw);         // for changing
    zombie.style.animationDuration = ${getRandomint(2,6)}s 
    gameBody.append(zombie)

    zombie.onclick = () => {
        zombieKill(zombie);

    }
}


// Iteration 3: Write a function to check if the player missed a zombie

function checkCollision(){
    //access zombie  from html page
    let zombie = document.getElementById("zombie"+zombieId)
    console.log("zombie:", zombie.getBoundingClientRect().top)

    if(zombie.getBoundingClientRect().top <= 0){
        lives--;
        console.log("zombie missed")
        zombieKill(zombie);
    }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function zombieKill(zombie){
    zombie.style.display = "none";
    zombieId++;
    makeZombie()
}
// Iteration 5: Creating timer
function startTimer(){
    let time = 60;
    timerBox.textContent = time;
    setInterval( () => {
        time--
        timerBox.textContent = time;

        //checking if player missed a zombie to kill 
        checkCollision()

        if(lives==0){
            window.location.href="./game-over.html";
        }
        // winning condition if i survived for 60sec I won the game
        if(time==0){
            window.location.href = "./win.html"
        }
    }, 1000)
}

startTimer();

// Iteration 6: Write a code to start the game by calling the first zombie
makeZombie();
// Iteration 7: Write the helper function to get random integer

function getRandomint(min,max){     // min : 0 max : 6 (excluding)
    let random = Math.floor(Math.random()*( max - min ) ) + min  // min:0+5=5   max : 5+5=10
    return random;
}
