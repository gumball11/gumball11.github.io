var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function boring() {
  alert("Well, you can leave. Whenever.");
  story.innerHTML = "Goodbye."
  opt1.innerHTML = "";
  opt2.innerHTML = "";
}

function play() {
  name = prompt("What is your name?");
  story.innerHTML = "Welcome, " + name +". You have been chosen to go undercover as a secret agent ";
  opt1.innerHTML = "Take the job";
  opt1.onclick = function() {agent()};
  opt2.innerHTML = "Deny the job";
  opt2.onclick = function() {deny()};
}

function agent() {
   story.innerHTML = "Someone is missing. The Boss needs you to spy on the Russians.";
  opt1.innerHTML = "Go to Russia";
  opt1.onclick = function() {spy()};
  opt2.innerHTML = "Take a different case";
  opt2.onclick = function() {diff()};
}
function diff() {
   story.innerHTML = "Your case is another person missing in Ethiopia";
  opt1.innerHTML = "Take the plane to Ethiopia";
  opt1.onclick = function() {plane()};
  opt2.innerHTML = "Take the train to Ethiopia";
  opt2.onclick = function() {train()};
}

function spy() {
   story.innerHTML = "You go to Russia and get captured by Russian spies";
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {RUS()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}

function train() {
   story.innerHTML = "You arive in Ethiopia and find the missing person";
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {play()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}
function deny() {
   story.innerHTML = "You deny the job and become poor and die of starvation";
  opt1.innerHTML = "Restart";
  opt1.onclick = function() {play()};
  opt2.innerHTML = "";
  opt2.onclick = "";
}
function plane() {
   story.innerHTML = "";
  opt1.innerHTML = "Take the plane to Ethiopia";
  opt1.onclick = function() {plane()};
  opt2.innerHTML = "Take the train to Ethiopia";
  opt2.onclick = function() {train()};
}