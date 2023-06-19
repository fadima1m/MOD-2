"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Fadima Macalou
      Date:   05-30-2023

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz list");

startQuiz.onclick = function() {
    //onclick event handler to start the quiz
    overlay.className = "showquiz";
    //setting the time interval to 1000 milliseconds
    timeID = setInterval(countdown, 1000);
};
//creating the countdown function
function countdown() {
    //creating the variable total correct answers and setting it equal to check answers total
    let totalCorrect = checkAnswers();
    //if the timer ends and no more time is left + the grade of score if 100% or else not 100%
    if (timeLeft === 0) {
        //cancelling the timed counter command with the timed ID
        clearInterval(timeID);
        
        //nested if function for grading the quiz
        if (totalCorrect === correctAnswers.length) {
            //alert for 100% test score
            alert ("Congratulations! You scored 100%! ,':D");
           //else statement for if they got 0% or less than 100% 
        } else {
            //what is alerted as a button if they got less than 100%
            alert("Incorrect answers: " + totalCorrect + " out of " + correctAnswers.length);
            //setting the time left to the quiz time which is zero
            timeLeft = 0;
            //setting the quiz clock value from where it starts and stopping it at when the quiz is complete
            quizClock.value = timeLeft;
            //hiding the quiz from the user after the time runs out to stop them from making any changes + mysterious
            overlay.className = "hidequiz";
        }
    } else {
        //decreasing the time by one second essentially creating the countdown we want
        timeLeft--;
        //setting the quiz clock value to how much time is left on the quiz
        quizClock.value = timeLeft;
    }
}




















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

