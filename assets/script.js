//TODO Timed quiz on JS fundamentals that stores high scores.
//TODO click the start button a timer starts and given question 1 
//TODO when i answer i am given the next question
//TODO when i answer wrong, time is subtracted
//TODO when all questions are answered OR the timer reaches 0 the game is over




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

let questions = [];

let q1 = new Question(
    "what is the my name?",
    "frank",
    "jack",
    "will",
    "Julian",
    "will"
);


function displayQuestion(){

};

let q_display = document.getElementById("question");
q_display.innerText = q1.question;


let answer1 = document.getElementById("1");
answer1.innerText = q1.answer_choices[0];
let answer2 = document.getElementById("2");
answer2.innerText = q1.answer_choices[1];
let answer3 = document.getElementById("3");
answer3.innerText = q1.answer_choices[2];
let answer4 = document.getElementById("4");
answer4.innerText = q1.answer_choices[3];

let timer = document.querySelector("#timer");
let timer_time_display = document.querySelector("#timer_time");
let start_time = 30;
let question_response = document.querySelector("#question_response");


//TODO click the start button a timer starts and given question 1
let answer_choice = document.querySelector("#answers")
this.addEventListener("load", function() {
    timer_time_display.innerText = start_time;
    setInterval(function(){
        if (start_time > 0){
            start_time --;
            timer_time_display.innerText = start_time;
        } else {
            question_response.innerText = "TIMES UP";
        }
    }, 1000);
});


let answers = document.querySelector("#answers")


//!! HIGH SCORE PAGE 
let view_high_scores = document.querySelector("#high_score_link");

view_high_scores.addEventListener("click", function () {
    let hsPage = document.getElementById("hs_page");
    if (hsPage.style.display === "none") {
        hsPage.style.display = "block";
        answers.style.display = "none";
        question_response.style.display = "none";
        timer.style.display = "none";
        q_display.innerText = "HIGH SCORES"
    } else {
        hsPage.style.display = "none";
        answers.style.display = "flex";
        question_response.style.display = "block";
    };
});


//TODO when the game is over then i can store my initials in a high score page

//TODO reset and start over

//* reset */

