

//? intro variables
const intro_txt = "Welcome to the JavaScript Code Quiz!";
const intro_p = "It's the game I made from scratch to display questions about JS";
const start_game = document.querySelector("#start");
const reset_scores = document.querySelector(".reset");
const main_card = document.querySelector("#main_card");
const exit_game = document.querySelector("#exit");

//? question display variables
const q_display = document.getElementById("question");
const p_display = document.getElementById("p");
const header = document.querySelector("header");
let qList = []; //list of questions made
let qList_random = []; //once the questions are jumbled each time they are stored here. 
var qListIterator = 0;
var score = 0;

//? Timer variables
let timer = document.querySelector("#timer"); //the whole timer block
let timer_time_display = document.querySelector("#timer_time"); // the time displayed
let game_time = 30; // how long we want to play the game
let start_time; // internal counter
let question_response = document.querySelector("#question_response"); // popup if time is out or question is right/wrong
let timerID;

//? Block of answers vars
let answer_block = document.querySelector("#answers");
let answer1 = document.getElementById("1.1");
let answer2 = document.getElementById("2.1");
let answer3 = document.getElementById("3.1");
let answer4 = document.getElementById("4.1");
let button1 = document.getElementById("0");
let button2 = document.getElementById("1");
let button3 = document.getElementById("2");
let button4 = document.getElementById("3");


//? HS variables
let view_high_scores = document.querySelector("#high_score_link");
let hs_page = document.querySelector("#hs_page");
let restart = document.querySelector("#restart");
let initials = document.getElementById("initials");
let hs_element = document.getElementById("hs_list");
let submit_initials = document.getElementById("submit_initials");
let high_scores= [];
let actual_initials = document.getElementById("actual_initials");


//TODO Maybe add a feature for user input to add questions to the game.

/**
 * Creates a new Question object.
 * @param {string} question - The question text.
 * @param {string} answerA - Answer choice A.
 * @param {string} answerB - Answer choice B.
 * @param {string} answerC - Answer choice C.
 * @param {string} answerD - Answer choice D.
 * @param {number} correct - index of the correct answer (0 index)
 */
function Question(question, answerA, answerB, answerC, answerD, correct) {
    this.question = question;
    this.answer_choices = [answerA, answerB, answerC, answerD];
    this.correct = correct;
};
const q1 = new Question(
    "Which function is used to display a message in a dialog box?",
    "prompt()",
    "log()",
    "alert()",
    "confirm()",
    2
  );
  qList.push(q1);
  
  const q2 = new Question(
    "Which keyword is not used to declare a variable in JavaScript?",
    "var",
    "let",
    "int",
    "const",
    2
  );
  qList.push(q2);
  
  const q3 = new Question(
    "Which symbol is used to assign a value to a variable in JavaScript?",
    "=",
    "===",
    "==",
    "=>",
    0
  );
  qList.push(q3);
  
  const q4 = new Question(
    "Which method is used to add an element to the end of an array in JavaScript?",
    "pop()",
    "unshift()",
    "push()",
    "shift()",
    2
  );
  qList.push(q4);
  
  const q5 = new Question(
    "What is the correct syntax for a single-line comment in JavaScript?",
    "/* This is a comment */",
    "# This is a comment",
    "<!-- This is a comment -->",
    "// This is a comment",
    3
  );
  qList.push(q5);
  
  const q6 = new Question(
    "Which operator is used to concatenate two strings in JavaScript?",
    "+",
    "/",
    "-",
    "*",
    0
  );
  qList.push(q6);
  
  const q7 = new Question(
    "Which method is used to convert a string to an integer in JavaScript?",
    "parseFloat()",
    "Math.random()",
    "toString()",
    "parseInt()",
    3
  );
  qList.push(q7);
  
  const q8 = new Question(
    "What does the 'NaN' value represent in JavaScript?",
    "Negative",
    "Null and None",
    "Not Available Now",
    "Not a Number",
    3
  );
  qList.push(q8);
  
  const q9 = new Question(
    "Which statement is used to exit a loop in JavaScript?",
    "continue",
    "break",
    "return",
    "exit",
    1
  );
  qList.push(q9);
  
  const q10 = new Question(
    "Which method is used to select an HTML element by its ID in JavaScript?",
    "querySelector()",
    "getElementById()",
    "getElementsByClassName()",
    "getElementsByTagName()",
    1
  );
  qList.push(q10);



function jumbleQuestions() {
    console.log('entry items', qList);
    while (qList.length > 0){
        const randomQ = Math.floor(Math.random() * qList.length);
        const current_item = qList[randomQ];
        qList.splice(randomQ, 1);
        qList_random.push(current_item);
    }
    qList = qList_random;
    qList_random = [];
}


function timerStart() {
    timerReset();
    timer.style.display = "block";
    timer_time_display.innerText = start_time;
    timerID = setInterval(function(){
        if (start_time > 0){
            start_time --;
            timer_time_display.innerText = start_time;
        } else {
            question_response.innerText = "TIMES UP";
            clearInterval(timerID);
            scorePage();
        }
    }, 1000);
};

function timerReset() {
    start_time = game_time;
    clearInterval(timerID);
};

function restartGame(){
    switchButtons()
    introPage();
};

function switchButtons() {
    if (start_game.style.display === ''){
        start_game.style.display = "none";
        exit_game.style.display = "";
    } else if (exit_game.style.display === ""){
        start_game.style.display = "";
        exit_game.style.display = "none";
    };
};


function mainCard() {
    hs_page.style.display = "none";
    main_card.style.display = "flex";
};


function gameOn() {
    qListIterator --;
    if (qListIterator >= 0) {
        q_display.innerText = qList[qListIterator].question;
        displayAnswers(qList[qListIterator]);
    } else if (qListIterator < 0) {
        scorePage();
    }
};

/** Evaluates answers when button is pressed */
function evaluateAnswer(event){
    var element = this.id;
    var qlist_answer = qList[qListIterator].correct;
    if (element == qlist_answer) {
        question_response.innerText = "CORRECT";
        score ++;
        gameOn();
    } else {
        question_response.innerText = "WRONG, Lost 5 Sec";
        start_time -= 5;
        console.log("answer is wrong");
        gameOn();
    }
};

function hsPage() {
    p_display.innerText = "";
    refresHSpage()

    const numberOfScoresToShow = 5;
    const topHighScores = high_scores.slice(0, numberOfScoresToShow);

    if (topHighScores.length === 0){
        p_display.innerText = "No High Scores";
    }
    for (let i in topHighScores){
        let li = document.createElement("li");
        li.style.listStyleType = "decimal";
        li.textContent = topHighScores[i]["user_initials"] + " : " + topHighScores[i]["score"];
        hs_element.appendChild(li);
    }
    initials.style.display = "none";
    main_card.style.display = "none";
    hs_page.style.display = "flex";
    timer.style.display = "none";
};
/**
 * A page for displaying your final score and
 * to input your initials for the HS pagedd
 */
function scorePage() {
    initials.style.display = "block";
    q_display.innerText = "Final Score";
    p_display.innerText = score;
    question_response.innerText = '';
    hideAnswers();
};

function getHSlist(){
    var high_scores_history = (JSON.parse(localStorage.getItem("HS")));
    if (high_scores_history != null) {
        high_scores = high_scores_history;
        high_scores.sort(function(a, b) {
            return b.score - a.score; // Sort in descending order based on the score
        });
    } else {
        return;
    };

};

function refresHSpage(){
    while (hs_element.hasChildNodes())
        hs_element.removeChild(hs_element.firstChild);
};


submit_initials.addEventListener("click", function(){
    user_initials = actual_initials.value;
    high_scores.push({user_initials: user_initials, score: score});
    high_scores.sort(function(a, b) {
        return b.score - a.score; // Sort in descending order based on the score
    });
    localStorage.setItem("HS", JSON.stringify(high_scores));
    hsPage();
});

function resetAll() {
    score = 0;
    high_scores = [];
    localStorage.clear();
    restartGame()
};



/** Displays answers
 * @param {index} q - list location for question qList[qListIterator]
 */
function displayAnswers(q) {
    showAnswers()
    answer1.innerText = q.answer_choices[0];
    answer2.innerText = q.answer_choices[1];
    answer3.innerText = q.answer_choices[2];
    answer4.innerText = q.answer_choices[3];
};

function showAnswers() {
    answer_block.style.display = "flex";
}

function hideAnswers() {
    answer_block.style.display = "none";
};

function __init__(){
    getHSlist();
    introPage();
}


function introPage() {
    mainCard();
    hideAnswers();
    timerReset();
    refresHSpage();
    score = 0;
    qListIterator = qList.length; 
    timer.style.display = "none";
    initials.style.display = "none";
    question_response.innerText = "";
    q_display.innerText = intro_txt;
    p_display.innerText = intro_p;
    start_game.style.display = "";
    exit_game.style.display = "none";
};


//? Listener Section
view_high_scores.addEventListener("click", function() {
    console.log("view HS pressed");
    if (main_card.style.display == "flex") {
        hsPage();
        hideAnswers();
    };
});

restart.addEventListener("click", restartGame);


start_game.addEventListener("click", function(){
    p_display.innerText = "";
    jumbleQuestions();
    switchButtons();
    timerStart();
    gameOn();
});

reset_scores.addEventListener("click", resetAll);

exit_game.addEventListener("click",function(){
    switchButtons();
    introPage();
});


button1.addEventListener("click", evaluateAnswer);
button2.addEventListener("click", evaluateAnswer);
button3.addEventListener("click", evaluateAnswer);
button4.addEventListener("click", evaluateAnswer);







__init__();