const display = document.getElementById("display");
//variable display and assigns it the reference to the HTML element with the ID "display".


let timer = null;       //hold the id of setInterval()
let startTime = 0;   //It will store the timestamp when the stopwatch starts. 
let elapsedTime = 0; //It will store the total elapsed time in milliseconds.
let isRunning = false;      //check if SW is running

function start(){       //called on pressing START button
    if(!isRunning){     // if SW not running then start the stopwatch
        startTime = Date.now() - elapsedTime;  // start time (when user press start button) 
        timer = setInterval(update, 10);    //main calculations occur inside UPDATE()
        isRunning = true;
    }
}

function stop(){   //called on pressing STOP button
    if(isRunning){    // if SW is running 
        clearInterval(timer);   //
        elapsedTime = Date.now() - startTime; //calculating elapsedtime , for printing on screen
        isRunning = false;
    }
}

function reset(){   //called on pressing RESET button
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // calculating elspased time , 

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));  //converting milli sec.  to hours
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); //converting milli sec.  to min
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");  //padding for smooth look while  it is runnig
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}