var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in Javascript can be used to store ____",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    answer: "All of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is _____.",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  },
  
];

///////////////////////////////////////////////////////////////////////////////////////////////
var timeLeft = 75;
var timerDisplay = document.querySelector("#timer");
var question = document.querySelector("#quest");
var optionsList = document.querySelector("#options");
var option1 = document.querySelector("#op1");
var option2 = document.querySelector("#op2");
var option3 = document.querySelector("#op3");
var option4 = document.querySelector("#op4");
var message = document.querySelector("#rightOrWrong");
var optionsList = document.querySelector("#options");
var i=0;
var score=0;
var msg = "";
var iterations = 0;

var RSound = document.querySelector("#RAns");
var WSound = document.querySelector("#WAns");

timerDisplay.textContent = timeLeft;

function displayTimer(){
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if(timeLeft == 0)
  {
    clearInterval(downLoadTimer);
    localStorage.setItem("currentScore", JSON.stringify(score));
    location.assign("result.html");
  }
    
}

function initializePage(){
  question.textContent = questions[0].title;
  option1.textContent = questions[0].choices[0];
  option2.textContent = questions[0].choices[1];
  option3.textContent = questions[0].choices[2];
  option4.textContent = questions[0].choices[3];
}

function goToNext(){    
  if(event.target.matches("button"))
  {
    if(event.target.textContent === questions[i].answer) 
    {
      msg = "Right Answer!";
      RSound.play();
    }
    else
    {
      msg = "Wrong Answer!"
      timeLeft -= 15;
      WSound.play();
    }
      
    //Don't try to fetch the entry that doesn't exist (i = length)
    if(i<questions.length-1)
    {
      i++;
    }
    //Keep track of the number of questions
    iterations++;

    question.textContent = questions[i].title;
    option1.textContent = questions[i].choices[0];
    option2.textContent = questions[i].choices[1];
    option3.textContent = questions[i].choices[2];
    option4.textContent = questions[i].choices[3];
    message.textContent = msg;

    var timeOutReturn1 = setTimeout(() => {
        message.textContent = "";
        if(iterations >= questions.length){
          score = timeLeft;
          localStorage.setItem("currentScore", JSON.stringify(score));
          location.assign("result.html");
        }
    }, 1000);

  }
    
}

var downLoadTimer = setInterval(displayTimer, 1000);
initializePage();
optionsList.addEventListener("click", goToNext);



  

 

  
 
