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
var q1a2 = document.getElementById("q")





//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", fire);
q1a1.addEventListener("click", earth);
q1a1.addEventListener("click", water);
q1a1.addEventListener("click", air);





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