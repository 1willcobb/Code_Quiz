//TODO Timeed quiz on JS fundamentals that stores high scores.
//TODO click the start button a timer starts and given question 1 
//TODO when i answer i am given the next question
//TODO when i answer wrong, time is subtracted
//TODO when all questions are answered OR the timer reaches 0 the game is over
//TODO when the game is over then i can store my initials in a high score page
//TODO the high score page can be opened at any time.


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
    "nick",
    "jack",
    "will",
    "james",
    "will"
);


function displayQuestion(){

};

let q1_display = document.getElementById("question");
q1_display.innerText = q1.question;


let answer1 = document.getElementById("1");
answer1.innerText = q1.answer_choices[0];
let answer2 = document.getElementById("2");
answer2.innerText = q1.answer_choices[1];
let answer3 = document.getElementById("3");
answer3.innerText = q1.answer_choices[2];
let answer4 = document.getElementById("4");
answer4.innerText = q1.answer_choices[3];

q1_answers.addEventListener("click")


