//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var fireScore = 0;
var earthScore = 0;
var waterScore = 0;
var airScore = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElemnetById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');
var q3a3 = document.getElementById('q3a3');
var q3a4 = document.getElementById('q3a4');





//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", fire);
q1a2.addEventListener("click", water);
q1a3.addEventListener("click", air);
q1a4.addEventListener("click", earth);
q2a1.addEventListener("click", fire);
q2a2.addEventListener("click", earth);
q2a3.addEventListener("click", water);
q2a4.addEventListener("click", air);
q3a1.addEventListener("click", fire);
q3a2.addEventListener("click", earth);
q3a3.addEventListener("click", water);
q3a4.addEventListener("click", air)




//#TODO: Define quiz functions here
function fire(){  
  fireScore += 1;
  questionCount += 1;
}
function earth(){
  earthScore += 1;
  questionCount +=1;
}
function water(){
  waterScore += 1;
  questionCount += 1;
}
function air(){
  airScore += 1;
  questionCount += 1;
}