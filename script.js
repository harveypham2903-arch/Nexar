let selectedGrade = "";
let selectedSubject = "";

function selectGrade(grade){

  selectedGrade = grade;

  document.getElementById("gradeScreen").classList.add("hidden");

  document.getElementById("subjectScreen").classList.remove("hidden");

}

function selectSubject(subject){

  selectedSubject = subject;

  let questionData =
    questions[selectedGrade][selectedSubject][0];

  alert(
    "Question: " + questionData.question
  );

}
