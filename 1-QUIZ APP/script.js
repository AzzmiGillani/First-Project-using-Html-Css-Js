const questions=[
{
    // Question 1

    question:"Which is the Largest Animal on Earth?",
    answers:[
        {text:"shark", correct:
        false},
        {text:"Blue Whale", correct:
        true},
        {text:"Elephant", correct:
        false},
        {text:"Giraffe", correct:
        false}
    ]
},
{
    // Question 2

    question:"Who is the Founder of Pakistan?",
    answers:[
        {text:"Modi", correct:
        false},
        {text:"Mian Sahab", correct:
        false},
        {text:"Imran Khan", correct:
        false},
        {text:"Mohammad Ali Jinnah", correct:
        true},
    ]
},
{
    // Question 3

    question:"Which is the smallest continent in the World?",
    answers:[
        {text:"Asia", correct:
        false},
        {text:"Australia", correct:
        true},
        {text:"Africa", correct:
        false},
        {text:"Arctic", correct:
        false},
    ]
},
{
    // Question 4

    question:"Which is the Largest Desert in the World?",
    answers:[
        {text:"Gobi", correct:
        false},
        {text:"Sahara", correct:
        true},
        {text:"Africa", correct:
        false},
        {text:"Arctic", correct:
        false},
    ]
},
{
    // Question 5

    question:"Which is the smallest Country in the World?",
    answers:[
        {text:"Palistine", correct:
        false},
        {text:"Nepal", correct:
        false},
        {text:"Vatican city", correct:
        true},
        {text:"Paris", correct:
        false},
    ]
}
]


const questionElement=document.getElementById('question');
const answerContainer=document.getElementById('answer_buttons')
const next_btn=document.getElementById('next_btn');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0
    score=0
    next_btn.innerText="Next"

    next_btn.disabled = false;
    showQuestion();

    // Add these lines to hide the result container at the beginning
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'none';
}


const showQuestion=()=>{

    resetstate()
    let currentQuestion=questions
    [currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerText= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.innerText= answer.text;
        button.classList.add("btn")

        if (answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer);

        answerContainer.append(button)
        

    })
}

function selectAnswer(event){
    const selectedBtn=event.target;
    const isCorrect=selectedBtn.dataset.correct;

if(isCorrect=="true"){
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}


Array.from(answerContainer.children).forEach(button => {

    if (button.dataset.correct =="true"){
        button.classList.add("correct");
    }

    button.disabled = true
})

next_btn.style.display="block"
let questionNo= currentQuestionIndex +1;
next_btn.innerHTML=`Next <br> ${questionNo} out of ${questions.length}`

}

function resetstate(){
     next_btn.style.display='none'

     while( answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild)
     }
}

const showScore=()=>{
    resetstate();

    questionElement.innerText=`You Scored ${score} out of ${questions.length}`

    next_btn.style.display='block'
    next_btn.innerText='Play Again'
}

function handelNextQuestion(){
     currentQuestionIndex++;
     console.log("incremented")
    console.log("current Question index After Increment =", 
    currentQuestionIndex)
    
     if (currentQuestionIndex < questions.length){
        showQuestion()
     }
     else{
        showScore()
     }

}


next_btn.addEventListener("click", () => {
    console.log("Current Question index=", currentQuestionIndex)

   if (currentQuestionIndex < questions.length) {
        handelNextQuestion()
    } else {
       
       startQuiz()
    }
});

// start the Quiz
startQuiz();