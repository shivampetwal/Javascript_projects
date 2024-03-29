
let n = Math.floor(Math.random() * 10) + 1;
var chances = 3;
const ml = document.getElementById("ml");
const ip = document.getElementById("ip");
const op = document.getElementById("op");
const btn = document.getElementById("btn");

btn.onclick = function () {
    guessNumber();
};

function guessNumber() { 
    let guess = Number(ip.value);

    if (guess < n) {
        op.textContent = `Low, try guessing Higher, Chances left: ${--chances}`;
    } else if (guess > n) {
        op.textContent = `High, try guessing Lower, Chances left: ${--chances}`;
    } else if (guess === n) {
        op.textContent = `Congratulations!🎉🎊🥳 You guessed it : ${n}`;
        resetGame();
        return; // exit the function 
    }

    if(chances==0) {//this block only run when chances==0
        op.textContent = `Chances exhausted🥲 The correct number was ${n}`;
        resetGame();
    }
}

function resetGame() {
    // Reset chances and generate a new random number for the next game
    chances = 3;
    n = Math.floor(Math.random() * 10) + 1;
}
