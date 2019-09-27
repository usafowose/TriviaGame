var questions = {
  firstQ: "In what year was Michael Jordan drafted?",
  secondQ: "Who was the previous NBA Commisioner before Adam Silver?",
  thirdQ: "Which NBA Franchise has won the most NBA Championship Titles?",
  fourthQ:
    "What is it called when a player fouls a bad free-throw shooter intentionally?",
  fifthQ: "Which NBA coach has coached both Michael Jordan and Kobe Bryant?",
  sixthQ:
    "The Los Angeles Lakers won the 1980 NBA Championship with who as their assisstant coach?",
  seventhQ: "Dwyane Wade's nickname is ... ?"
};
$(document).ready(function() {
  console.log("Ready!");
  console.log("Time for our JS and JQuery to kick in!");

  var time = 60; 
  var timerval; 
  isCorrect = 0; 
  inIncorrect = 0; 
  isUnanswered = 0;  

  var $body = $("body");
  var $table = $("table");
  hideTable();
  function hideTable() {
    $table.hide();
  }; 

  var $startButton = $("<button>");
  $startButton.html("Let's See!");
  $("#start").append($startButton);

  $startButton.on("click", function() {
    console.log(questions);
    console.log("Let's Begin!");
    confirm("Shall We Proceed?");
    $startButton.hide();
    showTable();
  });

  function showTable() {
    $("#firstQ").text(questions.firstQ);
    $("#secondQ").text(questions.secondQ); 
    $("#thirdQ").text(questions.thirdQ);
    $("#fourthQ").text(questions.fourthQ); 
    $("#fifthQ").text(questions.fifthQ);
    $("#sixthQ").text(questions.sixthQ); 
    $("#seventhQ").text(questions.seventhQ);
    $table.show();

  }; 
});
