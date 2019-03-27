//Timer
var seconds = 00;
var min = 00;
var hours = 00;

//State
var counting = false;
var time;

//For styling
var frame = document.getElementById("main-content");
console.log("frame");

//Button
var buttonImg = document.getElementById("button-img");

function go() {
    if (counting) {
        buttonImg.src = "assets/icons/start.svg";
        counting = false;
        pause();
    } else {
        buttonImg.src = "assets/icons/pause.svg";
        counting = true;
        time = setInterval(start, 1000);
    }
}

//Start counter
function start() {
    seconds += 1;
    if (seconds == 60) {
        seconds = 0;
        min += 1;
    }
    if (min == 60) {
        min = 0;
        hours += 1;
    }
    update();
}

//Pause counter
function pause() {
    clearInterval(time);
}

//Reset counter
function reset(){
    seconds = 00;
    min = 00;
    hours = 00;
}

//Draw
function update() {
    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }
    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else {
        document.getElementById("min").innerHTML = min;
    }
    document.getElementById("hours").innerHTML = hours;
}