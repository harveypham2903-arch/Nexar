let selectedGrade = "";
let selectedSubject = "";

/* BAD WORD FILTER */

const bannedWords = [
  "badword",
  "hate",
  "sex",
  "kill"
];


/* LOGIN SYSTEM */

window.onload = function(){

  let loggedIn = localStorage.getItem("loggedIn");

  if(loggedIn === "true"){

    showMode();

  }

}


function showSignup(){

  document.getElementById("loginForm").classList.add("hidden");

  document.getElementById("signupForm").classList.remove("hidden");

}


function showLogin(){

  document.getElementById("signupForm").classList.add("hidden");

  document.getElementById("loginForm").classList.remove("hidden");

}


/* SIGN UP */

function signup(){

  let username =
    document.getElementById("signupUser").value.toLowerCase();

  let password =
    document.getElementById("signupPass").value;

  /* CHECK BAD WORDS */

  for(let word of bannedWords){

    if(username.includes(word)){

      alert("Inappropriate username.");

      return;

    }

  }

  localStorage.setItem("username", username);

  localStorage.setItem("password", password);

  localStorage.setItem("loggedIn", "true");

  alert("Account Created!");

  showMode();

}


/* LOGIN */

function login(){

  let username =
    document.getElementById("loginUser").value.toLowerCase();

  let password =
    document.getElementById("loginPass").value;

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


/* FAKE GOOGLE */

function fakeGoogleLogin(){

  alert("Google Login Coming Soon!");

}


/* SCREENS */

function showMode(){

  hideAllScreens();

  document.getElementById("modeScreen")
    .classList.remove("hidden");

  document.getElementById("homeBtn")
    .classList.remove("hidden");

}


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

  let questionData =
    questions[selectedGrade][selectedSubject][0];

  alert(
    "Question: " + questionData.question
  );

}


/* HOME BUTTON */

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

}
