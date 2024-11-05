const quotes = [
    "I am Iron Man.",
    "With great power comes great responsibility.",
    "I can do this all day.",
    "We are Groot."
];

document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
});

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

let quizQuestions = [
    { question: "Is Iron Man a member of the Avengers?", answer: true },
    { question: "Is Thor a human?", answer: false }
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = quizQuestions[currentQuestionIndex].question;
}

function checkAnswer(userAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    displayQuestion();
}
