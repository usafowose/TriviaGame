$(document).ready(function() {
  console.log("Ready!");
  console.log("Time for our JS and JQuery to kick in!");

  var $body = $("body");
  var $table = $("table");
  $table.hide();

  var $startButton = $("<button>");
  $startButton.html("Let's See!");
  $("#start").append($startButton);

  var questions = {
      "firstQ": "In what year was Michael Jordan drafted?", 
      "secondQ": "Who was the previous NBA COmmisioner before Adam Silver?", 
      "thirdQ": "Which NBA Franchise has won the most NBA Championship Titles?", 
  }; 
  $startButton.on("click", function() {
    console.log(questions)
    console.log("Let's Begin!");
    alert("Shall We Proceed?");
    $startButton.hide();
    $table.show();
    var firstQ = "In what year was Michael Jordan drafted into the NBA?";
    $("#firstQ").text(firstQ);

    
  });
});
