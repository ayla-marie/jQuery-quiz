$(document).ready(function() {
  const allQuestions = [
    "A labrodoodle is a mix between a labrador and a...",
    "The percentage of diabetics that are vegan is...",
    "Which of the following is not a personality test?"
  ];

  const allA = ["poodle", "15%", "Myers-Briggs"];
  const allB = ["granoodle", "20%", "Z-Scale"];
  const allC = ["boxer", "0%", "Jung Temperments"];
  const allD = ["dalmation", "5%", "Big 5"];

  //variable to keep track of progress
  var num = 0;
  var score = 0;

  //set question content
  function setQuestion() {
    num = num + 1;
    $("#question").text(allQuestions[num]);
    $("#a").text(allA[num]);
    $("#b").text(allB[num]);
    $("#c").text(allC[num]);
    $("#d").text(allD[num]);
    return num;
  }

  function rightAns(op) {
    function eval(n) {
      if (num === n) {
        score = score + 1;
      }
    }
    if (op === a) {
      eval(0);
    }
    if (op === b) {
      eval(2);
    }
    if (op === c) {
      eval(1);
    }
    if (op === d) {
      eval(3);
    }
    $("#score").text("Score: " + score);
    if (num === 2) {
      endQuiz();
    }
  }

  //function endQuiz
  function endQuiz() {
    $("#question").text(
      "You finished with a score of " + score + "/" + allQuestions.length + "."
    );
    $(".choice").hide();
    $("#score").hide();
    $("#submit")
      .show()
      .text("Restart?")
      .click(function() {
        num = 0;
        score = 0;
        $("#score")
          .text("Score: " + score)
          .show();
        $(".choice").show();
        loadQuestion();
      });
  }
  //load first question
  function loadQuestion() {
    $("#question").text(allQuestions[0]);
    $("#a").text(allA[0]);
    $("#b").text(allB[0]);
    $("#c").text(allC[0]);
    $("#d").text(allD[0]);
  }

  //hover listeners
  $(".choice").hover(function() {
    $(this).toggleClass("choice-select");
  });

  //click listeners
  $("#submit").click(function() {
    loadQuestion();
    $("#submit").hide();
  });
  $("#a").click(function() {
    rightAns(a);
    setQuestion();
  });
  $("#b").click(function() {
    rightAns(b);
    setQuestion();
  });
  $("#c").click(function() {
    rightAns(c);
    setQuestion();
  });
  $("#d").click(function() {
    rightAns(d);
    setQuestion();
  });
});
