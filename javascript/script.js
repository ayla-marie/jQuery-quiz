$(document).ready(function() {
  const questionAnswers = [
    {
      question: "When learning something new, do you think more about...",
      a: {
        ans: "How the information makes me feel",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "How I can use the information in my life",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "How other information connects to what I know",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "How the information can be used to improve things",
        scale: (NS = NS - 1)
      }
    },
    {
      question: "When making a decision within a team, you focus mostly on...",
      a: {
        ans: "Coming to an agreement",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "Organizing tasks and priorities",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "Evaluating relevant information",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "Determining what the goal/purpose is",
        scale: (NS = NS - 1)
      }
    },
    {
      question:
        "When your mind wanders, what are you more likely to think about?",
      a: {
        ans: "Friends, family, and being with others",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "Memories or activities I enjoy",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "Information related to my current interests/work",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "Ideas and goals based on a current problem/situation",
        scale: (NS = NS - 1)
      }
    },
    {
      question:
        "Of the words below, which do you beleive someone else is most likely to use to describe you?",
      a: {
        ans: "Kind",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "Practical",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "Smart",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "Creative",
        scale: (NS = NS - 1)
      }
    },
    {
      question: "What is your definition of a good leader?",
      a: {
        ans: "Someone who knows how to listen",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "Someone who knows how to organize others",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "Someone who knows how to delegate effectively",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "Someone who has and can communicate a vision/goal",
        scale: (NS = NS - 1)
      }
    },
    {
      question: "How do you take charge when needed?",
      a: {
        ans: "I guide the conversation to an agreement",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "I start doing what needs to be done and give orders as needed.",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "I explain my logic to persuade others to the correct conclusion",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "I provide the vision and/or goals, and organize our efforts",
        scale: (NS = NS - 1)
      }
    },
    {
      question: "I might go against popular opinion because...",
      a: {
        ans: "The popular opinion is amoral or unethical",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "The popular opinion is not acheivable or not practical.",
        scale: (NS = NS + 1)
      },
      c: {
        ans:
          "The popular opinion is irrational or opposes facts/current information",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "The popular opinion is short-sighted or not sustainable",
        scale: (NS = NS - 1)
      }
    },
    {
      question: "How can you tell when someone is lying to you?",
      a: {
        ans: "I can see it in their face",
        scale: (FT = FT - 1)
      },
      b: {
        ans: "I can tell by how they act",
        scale: (NS = NS + 1)
      },
      c: {
        ans: "They contradict themselves",
        scale: (FT = FT + 1)
      },
      d: {
        ans: "I feel it in my gut",
        scale: (NS = NS - 1)
      }
    },
    {
      question: "For the weekend, do you prefer...",
      a: {
        ans: "Decide Friday evening to decide how to spend the weekend",
        scale: (PJ = PJ - 1)
      },
      b: {
        ans: "To unwind on Saturday or Sunday with a solitary activity",
        scale: (IE = IE - 1)
      },
      c: {
        ans: "To spend most of the weekend doing things with friends",
        scale: (IE = IE + 1)
      },
      d: {
        ans:
          "To make plans early in the week so there is no stress about the weekend",
        scale: (PJ = PJ + 1)
      }
    },
    {
      question: "What is one thing you would like to improve in?",
      a: {
        ans: "I would like to be more decisive",
        scale: (PJ = PJ - 1)
      },
      b: {
        ans: "I would like to be able to make friends more easily",
        scale: (IE = IE - 1)
      },
      c: {
        ans: "I would like to feel more comfortable being alone",
        scale: (IE = IE + 1)
      },
      d: {
        ans: "I would like express more individuality",
        scale: (PJ = PJ + 1)
      }
    },
    {
      question: "Which of the words below sounds the least like you?",
      a: {
        ans: "Political",
        scale: (PJ = PJ - 1)
      },
      b: {
        ans: "Blabber-mouth",
        scale: (IE = IE - 1)
      },
      c: {
        ans: "Reclusive",

        scale: (IE = IE + 1)
      },
      d: {
        ans: "Amoral",

        scale: (PJ = PJ + 1)
      }
    },
    {
      question: "The ideal work environment allows me to...",
      a: {
        ans: "have control over how and when I work",
        scale: (PJ = PJ - 1)
      },
      b: {
        ans: "have a quiet, private space for focusing on work",
        scale: (IE = IE - 1)
      },
      c: {
        ans: "be in an open-office layout and wear casual clothes.",

        scale: (IE = IE + 1)
      },
      d: {
        ans: "keep a consistent schedule and provides clear goals",
        scale: (PJ = PJ + 1)
      }
    },
    {
      question: "What did you enjoy most as a child?",
      a: {
        ans: "Days of un-planned fun and exploration.",
        scale: (PJ = PJ - 1)
      },
      b: {
        ans: "Activities like reading, drawing, and imaginative play.",
        scale: (IE = IE - 1)
      },
      c: {
        ans: "Hanging out with my friends at school and on the weekends.",

        scale: (IE = IE + 1)
      },
      d: {
        ans: "being in sports, clubs, and church groups.",
        scale: (PJ = PJ + 1)
      }
    },
    {
      question: "Which quote do you like the most?",
      a: {
        ans: "The eyes are useless when the mind is blind.",
        scale: (PJ = PJ - 1)
      },
      b: {
        ans: "Quiet people have the loudest minds",
        scale: (IE = IE - 1)
      },
      c: {
        ans: "Take chances, make mistakes, and get out there to explore!",
        scale: (IE = IE + 1)
      },
      d: {
        ans: "Those who do not understand history are bound to repeat it.",
        scale: (PJ = PJ + 1)
      }
    }
  ];

  //loads Question content from array questionAnswers
  function loadQuestion() {
    $("#question").text(questionAnswers[num].question);
    $("#a").text(questionAnswers[num].a.ans);
    $("#b").text(questionAnswers[num].b.ans);
    $("#c").text(questionAnswers[num].c.ans);
    $("#d").text(questionAnswers[num].d.ans);
  }

  //variable to keep track of progress
  var num = 0;

  //Scales for the score
  var FT = 0;
  var NS = 0;
  var IE = 0;
  var PJ = 0;

  //set question content
  function setQuestion() {
    num = num + 1;
    loadQuestion();
    return num;
  }

  //use calcScores to determine 4-letter type
  function fourLetters() {
    if (IE <= 0) {
      letterOne = "I";
    } else {
      letterOne = "E";
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
    types = `${letterOne}${letterTwo}${letterThree}${letterFour}`;
  }

  function endQuiz() {
    fourLetters();
    $("#question").text("You are an " + types);
    $(".choice, #submit").hide();
    $(".nav").hide();
    $("#submit")
      .show()
      .text("Restart?")
      .click(function() {
        num = 0;
        FT = 0;
        NS = 0;
        IE = 0;
        PJ = 0;
        $(".nav").show();
        $(".choice").show();
        loadQuestion();
      });
  }
  //hover listeners
  $(".choice").hover(function() {
    $(this).toggleClass("choice-hover");
  });
  $(".choice").click(function() {
    $(this).toggleClass("choice-click");
  });

  //click listener submit
  $("#start").click(function() {
    $(".startScreen").css("display", "none");
    $(".testScreen").css("display", "flex");
    $("#start").hide();
    loadQuestion();
  });

  //click listener for next
  $("#next").click(function() {
    //how to set calcScores?
    setQuestion();
    $("#A, #B, #C, #D")
      .removeClass("choice-click")
      .addClass("choice");
  });
  //click listener for back
  $("#back").click(function() {
    num = num - 2;
    setQuestion();
  });

  const typeDescription = [
    {
      type: "ISTJ",
      description:
        "For ISTJs the dominant quality in their lives is an abiding sense of responsibility for doing what needs to be done in the here-and-now. Their realism, organizing abilities, and command of the facts lead to their completing tasks thoroughly and with great attention to detail. Logical pragmatists at heart, ISTJs make decisions based on their experience and with an eye to efficiency in all things. ISTJs are intensely committed to people and to the organizations of which they are a part; they take their work seriously and believe others should do so as well."
    },
    {
      type: "ISFJ",
      description:
        "For ISFJs the dominant quality in their lives is an abiding respect and sense of personal responsibility for doing what needs to be done in the here-and-now. Actions that are of practical help to others are of particular importance to ISFJs. Their realism, organizing abilities, and command of the facts lead to their thorough attention in completing tasks. ISFJs bring an aura of quiet warmth, caring, and dependability to all that they do; they take their work seriously and believe others should do so as well. "
    },
    {
      type: "INFJ",
      description:
        "For INFJs the dominant quality in their lives is their attention to the inner world of possibilities, ideas, and symbols. Knowing by way of insight is paramount for INFJs, and they often manifest a deep concern for people and relationships as well. INFJs often have deep interests in creative expression as well as issues of spirituality and human development. While the energy and attention of INFJs are naturally drawn to the inner world of ideas and insights, what people often first encounter with INFJs is their drive for closure and for the application of their ideas to people's concerns. "
    },
    {
      type: "INTJ",
      description:
        "For INTJs the dominant force in their lives is their attention to the inner world of possibilities, symbols, abstractions, images, and thoughts. Insight in conjunction with logical analysis is the essence of their approach to the world; they think systemically. Ideas are the substance of life for INTJs and they have a driving need to understand, to know, and to demonstrate competence in their areas of interest. INTJs inherently trust their insights, and with their task-orientation will work intensely to make their visions into realities."
    },
    {
      type: "ISTP",
      description:
        "For ISTPs the driving force in their lives is to understand how things and phenomena in the real world work so they can make the best and most effective use of them. ISTPs are logical and realistic people, and they are natural troubleshooters. When not actively solving a problem, ISTPs are quiet and analytical observers of their environment, and they naturally look for the underlying sense to any facts they have gathered. ISTPs do often pursue variety and even excitement in their hands-on experiences. Although they do have a spontaneous, even playful side, what people often first encounter with them is their detached pragmatism."
    },
    {
      type: "ISFP",
      description:
        "For ISFPs the dominant quality in their lives is a deep-felt caring for living things, combined with a quietly playful and sometimes adventurous approach to life and all its experiences. ISFPs typically show their caring in very practical ways, since they often prefer action to words. Their warmth and concern are generally not expressed openly, and what people often first encounter with ISFPs is their quiet adaptability, realism, and free spirit spontaneity."
    },
    {
      type: "INFP",
      description:
        "For INFPs the dominant quality in their lives is a deep-felt caring and idealism about people. They experience this intense caring most often in their relationships with others, but they may also experience it around ideas, projects, or any involvement they see as important. INFPs are often skilled communicators, and they are naturally drawn to ideas that embody a concern for human potential. INFPs live in the inner world of values and ideals, but what people often first encounter with the INFP in the outer world is their adaptability and concern for possibilities. "
    },
    {
      type: "INTP",
      description:
        "For INTPs the driving force in their lives is to understand whatever phenomenon is the focus of their attention. They want to make sense of the world -- as a concept -- and they often enjoy opportunities to be creative. INTPs are logical, analytical, and detached in their approach to the world; they naturally question and critique ideas and events as they strive for understanding. INTPs usually have little need to control the outer world, or to bring order to it, and they often appear very flexible and adaptable in their lifestyle. "
    },
    {
      type: "ESTP",
      description:
        "For ESTPs the dominant quality in their lives is their enthusiastic attention to the outer world of hands-on and real-life experiences. ESTPs are excited by continuous involvement in new activities and in the pursuit of new challenges. ESTPs tend to be logical and analytical in their approach to life, and they have an acute sense of how objects, events, and people in the world work. ESTPs are typically energetic and adaptable realists, who prefer to experience and accept life rather than to judge or organize it."
    },
    {
      type: "ESFP",
      description:
        "For ESFPs the dominant quality in their lives is their enthusiastic attention to the outer world of hands-on and real-life experiences. ESFPs are excited by continuous involvement in new activities and new relationships. ESFPs also have a deep concern for people, and they show their caring in warm and pragmatic gestures of helping. ESFPs are typically energetic and adaptable realists, who prefer to experience and accept life rather than to judge or organize it. "
    },
    {
      type: "ENFP",
      description:
        "For ENFPs the dominant quality in their lives is their attention to the outer world of possibilities; they are excited by continuous involvement in anything new, whether it be new ideas, new people, or new activities. Though ENFPs thrive on what is possible and what is new, they also experience a deep concern for people as well. Thus, they are especially interested in possibilities for people. ENFPs are typically energetic, enthusiastic people who lead spontaneous and adaptable lives."
    },
    {
      type: "ENTP",
      description:
        "For ENTPs the driving quality in their lives is their attention to the outer world of possibilities; they are excited by continuous involvement in anything new, whether it be new ideas, new people, or new activities. They look for patterns and meaning in the world, and they often have a deep need to analyze, to understand, and to know the nature of things. ENTPs are typically energetic, enthusiastic people who lead spontaneous and adaptable lives. "
    },
    {
      type: "ESTJ",
      description:
        "For ESTJs the driving force in their lives is their need to analyze and bring into logical order the outer world of events, people, and things. ESTJs like to organize anything that comes into their domain, and they will work energetically to complete tasks so they can quickly move from one to the next. Sensing orients their thinking to current facts and realities, and thus gives their thinking a pragmatic quality. ESTJs take their responsibilities seriously and believe others should do so as well."
    },
    {
      type: "ESFJ",
      description:
        "For ESFJs the dominant quality in their lives is an active and intense caring about people and a strong desire to bring harmony into their relationships. ESFJs bring an aura of warmth to all that they do, and they naturally move into action to help others, to organize the world around them, and to get things done. Sensing orients their feeling to current facts and realities, and thus gives their feeling a hands-on pragmatic quality. ESFJs take their work seriously and believe others should as well. "
    },
    {
      type: "ENFJ",
      description:
        "For ENFJs the dominant quality in their lives is an active and intense caring about people and a strong desire to bring harmony into their relationships. ENFJs are openly expressive and empathic people who bring an aura of warmth to all that they do. Intuition orients their feeling to the new and to the possible, thus ENFJs often enjoy working to manifest a humanitarian vision, or helping others develop their potential. ENFJs naturally and conscientiously move into action to care for others, to organize the world around them, and to get things done. "
    },
    {
      type: "ENTJ",
      description:
        "For ENTJs the driving force in their lives is their need to analyze and bring into logical order the outer world of events, people, and things. ENTJs are natural leaders who build conceptual models that serve as plans for strategic action. Intuition orients their thinking to the future, and gives their thinking an abstract quality. ENTJs will actively pursue and direct others in the pursuit of goals they have set, and they prefer a world that is structured and organized."
    }
  ];
});
