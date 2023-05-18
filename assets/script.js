//TODO Timed quiz on JS fundamentals that stores high scores.
//TODO click the start button a timer starts and given question 1 
//TODO when i answer i am given the next question
//TODO when i answer wrong, time is subtracted
//TODO when all questions are answered OR the timer reaches 0 the game is over

//? intro variables
const intro_txt = "Welcome to the JavaScript Code Quiz!";
const intro_p = "It's the game I made from scratch to display questions about JS";
const start_game = document.querySelector("#start");
start_game.addEventListener("click", start());
const reset_scores = document.querySelector(".reset");
reset_scores.addEventListener("click", resetAll());
const main_card = document.querySelector("#main_card");

//? question display variables
const q_display = document.getElementById("question");
const p_display = document.getElementById("p");
const header = document.querySelector("header");
let questions = []; //list of questions made

//? Timer variables
let timer = document.querySelector("#timer"); //the whole timer block
let timer_time_display = document.querySelector("#timer_time"); // the time displayed
let start_time = 5; // internal counter
let question_response = document.querySelector("#question_response"); // popup if time is out or question is right/wrong

//? Block of answers vars
let answer_block = document.querySelector("#answers");

//? HS variables
let view_high_scores = document.querySelector("#high_score_link");
let hs_page = document.querySelector("#hs_page");
let restart = document.querySelector("#restart");



//TODO click the start button a timer starts and given question 1

function evaluateAnswer() {

};

function timerStart() {
    timer_time_display.innerText = start_time;
    setInterval(function(){
        if (start_time > 0){
            start_time --;
            timer_time_display.innerText = start_time;
        } else {
            question_response.innerText = "TIMES UP";
        }
    }, 1000);
};



function mainCard() {
    
};

function start() {
    
};

function resetAll() {
    
};

function introPage() {
    q_display.innerText = intro_txt;
    p_display.innerText = intro_p;
};

function displayQuestion() {
    q_display.innerText = q1.question;
    displayAnswers(q1);
};

function displayAnswers(q) {
    let answer1 = document.getElementById("1");
    answer1.innerText = q.answer_choices[0];
    let answer2 = document.getElementById("2");
    answer2.innerText = q.answer_choices[1];
    let answer3 = document.getElementById("3");
    answer3.innerText = q.answer_choices[2];
    let answer4 = document.getElementById("4");
    answer4.innerText = q.answer_choices[3];
};



//? Listener Section
view_high_scores.addEventListener("click", function() {
    console.log("view HS pressed");
    if (main_card.style.display == "block") {
        main_card.style.display = "none";
        answer_block.style.display = "none";
        hs_page.style.display = "block";
    };
});

restart.addEventListener("click", function() {
    hs_page.style.display = "none";
    main_card.style.display = "block";
    introPage();
});


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
        }
    }
}

const q1 = new Question(
    "what is the my name?",
    "frank",
    "jack",
    "will",
    "Julian",
    "will"
);




//TODO when the game is over then i can store my initials in a high score page



introPage();
