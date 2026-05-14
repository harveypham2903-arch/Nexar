let selectedGrade = "";
let selectedSubject = "";
let currentQuestion = null;


/* BAD WORDS */

const bannedWords = [
  "badword",
  "hate",
  "sex",
  "kill"
];


/* AUTO LOGIN */

window.onload = function(){

  let loggedIn = localStorage.getItem("loggedIn");

  if(loggedIn === "true"){

    showMode();

  }

}


/* LOGIN / SIGNUP */

function showSignup(){

  document.getElementById("loginForm")
    .classList.add("hidden");

  document.getElementById("signupForm")
    .classList.remove("hidden");

}


function showLogin(){

  document.getElementById("signupForm")
    .classList.add("hidden");

  document.getElementById("loginForm")
    .classList.remove("hidden");

}


/* SIGNUP */

function signup(){

  let username =
    document.getElementById("signupUser")
    .value
    .toLowerCase();

  let password =
    document.getElementById("signupPass")
    .value;

  /* EMPTY CHECK */

  if(username === "" || password === ""){

    alert("Fill everything out.");

    return;

  }

  /* BAD WORD CHECK */

  for(let word of bannedWords){

    if(username.includes(word)){

      alert("Inappropriate username.");

      return;

    }

  }

  /* DUPLICATE ACCOUNT CHECK */

  let existingUser =
    localStorage.getItem("username");

  if(username === existingUser){

    alert("Username already exists.");

    return;

  }

  /* SAVE ACCOUNT */

  localStorage.setItem("username", username);

  localStorage.setItem("password", password);

  localStorage.setItem("loggedIn", "true");

  alert("Account Created!");

  showMode();

}


/* LOGIN */

function login(){

  let username =
    document.getElementById("loginUser")
    .value
    .toLowerCase();

  let password =
    document.getElementById("loginPass")
    .value;

  let savedUser =
    localStorage.getItem("username");

  let savedPass =
    localStorage.getItem("password");

  if(username === savedUser &&
     password === savedPass){

    localStorage.setItem("loggedIn", "true");

    showMode();

  } else {

    alert("Wrong username or password");

  }

}


/* GOOGLE */

function fakeGoogleLogin(){

  alert("Google Login Coming Soon!");

}


/* MODE */

function showMode(){

  hideAllScreens();

  document.getElementById("modeScreen")
    .classList.remove("hidden");

  document.getElementById("homeBtn")
    .classList.remove("hidden");

}


/* GRADE */

function showGrade(){

  hideAllScreens();

  document.getElementById("gradeScreen")
    .classList.remove("hidden");

}


/* SELECT GRADE */

function selectGrade(grade){

  selectedGrade = grade;

  hideAllScreens();

  document.getElementById("subjectScreen")
    .classList.remove("hidden");

}


/* SELECT SUBJECT */

function selectSubject(subject){

  selectedSubject = subject;

  startQuestion();

}


/* START QUESTION */

function startQuestion(){

  hideAllScreens();

  document.getElementById("questionScreen")
    .classList.remove("hidden");

  let questionList =
    questions[selectedGrade][selectedSubject];

  currentQuestion = questionList[0];

  document.getElementById("questionText")
    .innerText =
    currentQuestion.question;

}


/* CHECK ANSWER */

function checkAnswer(){

  let userAnswer =
    document.getElementById("answerInput")
    .value
    .toLowerCase();

  let correctAnswer =
    currentQuestion.answer
    .toLowerCase();

  if(userAnswer === correctAnswer){

    alert("Correct!");

  } else {

    alert(
      "Wrong! Correct answer: " +
      currentQuestion.answer
    );

  }

}


/* HOME */

function goHome(){

  hideAllScreens();

  document.getElementById("authScreen")
    .classList.remove("hidden");

  document.getElementById("homeBtn")
    .classList.add("hidden");

  localStorage.setItem("loggedIn", "false");

}


/* HIDE ALL */

function hideAllScreens(){

  document.getElementById("authScreen")
    .classList.add("hidden");

  document.getElementById("modeScreen")
    .classList.add("hidden");

  document.getElementById("gradeScreen")
    .classList.add("hidden");

  document.getElementById("subjectScreen")
    .classList.add("hidden");

  document.getElementById("questionScreen")
    .classList.add("hidden");

}
