//question index

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
  let score;

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

  //a is right answer
  function ArightAns() {
    if (num === 0) {
      score = score + 1;
    }
    return score;
  }
  //b is right answer
  function BrightAns() {
    if (num === 2) {
      score = score + 1;
      endQuiz();
    }
    return score;
  }
  //c is right answer
  function CrightAns() {
    if (num === 1) {
      score = score + 1;
    }
    return score;
  }
  //d is right answer
  function DrightAns() {
    if (num === 3) {
      score = score + 1;
    }
    return score;
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
        $(".choice").show();
        $("#score").show();
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
    score = 0;
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
    ArightAns();
    setQuestion();
    $("#score").text("Score: " + score);
  });
  $("#b").click(function() {
    BrightAns();
    setQuestion();
    $("#score").text("Score: " + score);
  });
  $("#c").click(function() {
    CrightAns();
    setQuestion();
    $("#score").text("Score: " + score);
  });
  $("#d").click(function() {
    DrightAns();
    setQuestion();
    $("#score").text("Score: " + score);
  });
});
