// your code here:
var secondsCounter = 0;
var timerId;


var resetBtn = document.getElementById('reset');
var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var buttons = document.querySelectorAll(".controls");
var h1Element = document.getElementById('timer');

startBtn.addEventListener("click", startWatch);
resetBtn.addEventListener("click", resetWatch);
pauseBtn.addEventListener("click", pauseWatch);

function startWatch() {
  h1Element.innerHTML  = secondsCounter;
  timerId=setInterval(updateTime, 1000);
}

function pauseWatch() {
  clearInterval(timerId);
}

 function updateTime (){
   if (secondsCounter === 60) {
     secondsCounter = 0;
   }
  secondsCounter += 1;
  h1Element.innerHTML = secondsCounter;
}

function resetWatch() {
  clearInterval(setIntervalID);
  h1Element.innerHTML = "Stop Watch"
  secondsCounter = 0
}
