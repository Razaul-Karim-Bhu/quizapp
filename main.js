const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is your name?",
        a: "Razaul",
        b: "Razib",
        c: "Kibrea",
        d: "Mintu",
        ans: "ans1"
    },
    {
        question: "Q2: What is your favourite player?",
        a: "Messi",
        b: "Ronaldo",
        c: "Pele",
        d: "Carlos",
        ans: "ans2"
    },
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.getElementById('showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
        
    });
    return answer;
}

const deselect = () =>{
   answers.forEach((curAnsEle) => curAnsEle.checked = false)
}

submit.addEventListener('click', ()=>{
    const checkAnswer = getCheckAnswer();

    if(checkAnswer == quizDB[questionCount].ans){

        score++
    };
    questionCount++;

    deselect();

    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
           <h2>Your score ${score}/${quizDB.length}</h2>
           <button class="btn" onclick = "location.reload()">Start Again</button>
        `;
        showScore.classList.remove('scoreArea')
    }
});