//TODO Timed quiz on JS fundamentals that stores high scores.
//TODO when all questions are answered OR the timer reaches 0 the game is over

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
var qListIterator;
var score = 0;

//? Timer variables
let timer = document.querySelector("#timer"); //the whole timer block
let timer_time_display = document.querySelector("#timer_time"); // the time displayed
let game_time = 100; // how long we want to play the game
let start_time; // internal counter
let question_response = document.querySelector("#question_response"); // popup if time is out or question is right/wrong
let timerID;

//? Block of answers vars
let answer_block = document.querySelector("#answers");
let answer1 = document.getElementById("1.1");
let answer2 = document.getElementById("2.1");
let answer3 = document.getElementById("3.1");
let answer4 = document.getElementById("4.1");
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");


//? HS variables
let view_high_scores = document.querySelector("#high_score_link");
let hs_page = document.querySelector("#hs_page");
let restart = document.querySelector("#restart");

//? Question Creation Section
//TODO Maybe add a feature for user input to add questions to the game.
function Question(question, answerA, answerB, answerC, answerD, correct) {
    this.question = question;
    this.answer_choices = [answerA, answerB, answerC, answerD];
    this.correct = correct;
    this.ask = function() {
        console.log(this.question);
        var start = 1;
        for (var i in this.answer_choices){
            console.log(start + ": " + this.answer_choices[i]);
            start ++;
        };
    };
};

const q1 = new Question(
    "What does 'this' mean?",
    "Refers to the 'document'",
    "Refers to the parent",
    "Refers to the child",
    "Refers to a function called 'this'",
    0
);
qList.push(q1);

const q2 = new Question(
    "what is the my name?",
    "frank",
    "jack",
    "will",
    "Julian",
    1
);
qList.push(q2);

const q3 = new Question(
    "question 3?",
    "frank",
    "jack",
    "will",
    "Julian",
    3
);
qList.push(q3);



function jumbleQuestions(){
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

function hsPage() {
    main_card.style.display = "none";
    hs_page.style.display = "block";
    timer.style.display = "none";
};

function mainCard() {
    hs_page.style.display = "none";
    main_card.style.display = "block";
};

/* SOMETHING WRONG HERE 2 things dong the same thing
function gameOn() {
    if (qListIterator >= 0) {
        q_display.innerText = qList[qListIterator].question;
        displayAnswers(qList[qListIterator]);
        qListIterator --;
    } else if (qListIterator < 0) {
        scorePage();
    }
};

function evaluateAnswer(event){
    var element = this.id
    console.log(qList[qListIterator].correct)
    if (element === qList[qListIterator].correct) {
        question_response.innerText = "CORRECT";
        score ++;
        gameOn();
    } else {
        question_response.innerText = "WRONG, Lost 5 Sec";
        start_time -= 5;
        gameOn()
    }
};
*/

function scorePage() {
    q_display.innerText = "Final Score"
    p_display.innerText = score;
    question_response.innerText = '';
    hideAnswers();
}


function resetAll() {
    score = 0;
};

function introPage() {
    mainCard();
    hideAnswers();
    timerReset()
    score = 0;
    qListIterator = qList.length - 1;
    timer.style.display = "none";
    question_response.innerText = "";
    q_display.innerText = intro_txt;
    p_display.innerText = intro_p;
};


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


//? Listener Section
view_high_scores.addEventListener("click", function() {
    console.log("view HS pressed");
    if (main_card.style.display == "block") {
        hsPage();
        hideAnswers();
    };
});

restart.addEventListener("click", introPage);

start_game.addEventListener("click", function(){
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






//TODO when the game is over then i can store my initials in a high score page



introPage();
