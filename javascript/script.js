$(document).ready(function() {
  const allQuestions = [
    "When learning something new, do you think more about...",
    "When making a decision within a team, you focus mostly on...",
    "When your mind wanders, what are you more likely to think about?",
    "Of the words below, which do you beleive someone else is most likely to use to describe you?",
    "What is your definition of a good leader?",
    "How do you take charge when needed?",
    "I might go against popular opinion because...",
    "How can you tell when someone is lying to you?",
    //9-15
    "For the weekend, do you prefer...",
    "What is one thing you would like to improve in?",
    "Which of the words below sounds the least like you?",
    "The ideal work environment allows me to...",
    "What did you enjoy most as a child?",
    "Which quote do you like the most?"
  ];

  //feeling 1-8; perceiving/openess 9-16
  const allA = [
    "How the information makes me feel",
    "Coming to an agreement",
    "Friends, family, and being with others",
    "Kind",
    "Someone who knows how to listen",
    "I guide the conversation to an agreement",
    "The popular opinion is amoral or unethical",
    "I can see it in their face",
    "Decide Friday evening to decide how to spend the weekend",
    "I would like to be more decisive",
    "Political",
    "have control over how and when I work",
    "Days of un-planned fun and exploration.",
    "The eyes are useless when the mind is blind."
  ];

  //sensing 1-8; introversion 9-16
  const allB = [
    "How I can use the information in my life",
    "Organizing tasks and priorities",
    "Memories or activities I enjoy",
    "Practical",
    "Someone who knows how to organize others",
    "I start doing what needs to be done and give orders as needed.",
    "The popular opinion is not acheivable or not practical.",
    "I can tell by how they act",
    "To unwind on Saturday or Sunday with a solitary activity",
    "I would like to be able to make friends more easily",
    "Blabber-mouth",
    "have a quiet, private space for focusing on work",
    "Activities like reading, drawing, and imaginative play.",
    "Quiet people have the loudest minds"
  ];

  //thinking 1-8; extroversion 9-16
  const allC = [
    "How other information connects to what I know",
    "Evaluating relevant information",
    "Information related to my current interests/work",
    "Smart",
    "Someone who knows how to delegate effectively",
    "I explain my logic to persuade others to the correct conclusion",
    "The popular opinion is irrational or opposes facts/current information",
    "They contradict themselves",
    "To spend most of the weekend doing things with friends",
    "I would like to feel more comfortable being alone",
    "Reclusive",
    "be in an open-office layout and wear casual clothes.",
    "Hanging out with my friends at school and on the weekends.",
    "Take chances, make mistakes, and get out there to explore!"
  ];

  //intuition; judgement/opinionated 9-16
  const allD = [
    "How the information can be used to improve things",
    "Determining what the goal/purpose is",
    "Ideas and goals based on a current problem/situation",
    "Creative",
    "Someone who has and can communicate a vision/goal",
    "I provide the vision and/or goals, and organize our efforts",
    "The popular opinion is short-sighted or not sustainable",
    "I feel it in my gut",
    "To make plans early in the week so there is no stress about the weekend",
    "I would like express more individuality",
    "Amoral",
    "keep a consistent schedule and provides clear goals",
    "being in sports, clubs, and church groups.",
    "Those who do not understand history are bound to repeat it."
  ];

  //variable to keep track of progress
  var num = 0;

  //Scales for the score
  var FT = 0;
  var NS = 0;
  var IE = 0;
  var PJ = 0;

  //load questions
  function loadQuestion() {
    $("#question").text(allQuestions[num]);
    $("#a").text(allA[num]);
    $("#b").text(allB[num]);
    $("#c").text(allC[num]);
    $("#d").text(allD[num]);
  }

  //set question content
  function setQuestion() {
    num = num + 1;
    loadQuestion();
    return num;
  }

  function calcScores(op) {
    if (op === a) {
      if (num >= 0 && num <= 7) {
        FT = FT - 1;
      }
      if (num >= 8 && num <= 13) {
        PJ = PJ - 1;
      }
      if (num === 13) {
        endQuiz();
      }
    }
    if (op === b) {
      if (num >= 0 && num <= 7) {
        NS = NS + 1;
      }
      if (num >= 8 && num <= 13) {
        IE = IE - 1;
      }
      if (num === 13) {
        endQuiz();
      }
    }
    if (op === c) {
      if (num >= 0 && num <= 7) {
        FT = FT + 1;
      }
      if (num >= 8 && num <= 13) {
        IE = IE + 1;
      }
      if (num === 13) {
        endQuiz();
      }
    }
    if (op === d) {
      if (num >= 0 && num <= 7) {
        NS = NS - 1;
      }
      if (num >= 8 && num <= 13) {
        PJ = PJ + 1;
      }
      if (num === 13) {
        endQuiz();
      }
    }
  }
  function fourLetters() {
    if (IE < 0) {
      letterOne = "I";
    } else if (IE > 0) {
      letterOne = "E";
    } else {
      letterOne = "A";
    }
    if (NS < 0) {
      letterTwo = "N";
    } else {
      letterTwo = "S";
    }
    if (FT <= 0) {
      letterThree = "F";
    } else {
      letterThree = "T";
    }
    if (PJ < 0) {
      letterFour = "P";
    } else {
      letterFour = "J";
    }
    type = `${letterOne}${letterTwo}${letterThree}${letterFour}`;
    return type;
  }

  function endQuiz() {
    fourLetters();
    $("#question").text("You are an " + type);
    $(".choice, #submit").hide();
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
  //hover listeners
  $(".choice").hover(function() {
    $(this).toggleClass("choice-select");
  });

  //click listeners
  $("#submit").click(function() {
    $(".startScreen").css("display", "none");
    $(".testScreen").css("display", "flex");
    $("#submit").hide();
    loadQuestion();
  });
  $("#a").click(function() {
    setQuestion();
    calcScores(a);
  });
  $("#b").click(function() {
    setQuestion();
    calcScores(b);
  });
  $("#c").click(function() {
    setQuestion();
    calcScores(c);
  });
  $("#d").click(function() {
    setQuestion();
    calcScores(d);
  });
});
