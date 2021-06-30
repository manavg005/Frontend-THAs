const quizDB=[
{
    question: "Q1 What is HTML",
    a:"Hyper Text Markup Language",
    b:"Hypo Text Markup Language",
    c:"Hyper Text Marking Laguage",
    d:"Hello Text MArking Language",
    ans:"ans1",
},
{
    question: "Q1 What is CSS",
    a:"Cascadding Style sheets",
    b:"Cascaddind Style Sheet",
    c:"C",
    d:"d",
    ans:"ans2",
},
{
    question: "Q1 What is HTTPS",
    a:"A",
    b:"B",
    c:"Hyper Text Transfer Protocol",
    d:"d",
    ans:"ans3",
},
{
    question: "Q1 What is JS",
    a:"JavaScript",
    b:"b",
    c:"c",
    d:"d",
    ans:"ans1",
},
{
    question: "Q1 What is JSON",
    a:"a",
    b:"b",
    c:"c",
    d:"JavaScript Object Notation",
    ans:"ans4",
    }
];

const question=document.querySelector('.question'); 
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit= document.querySelector('#submit');

const answers = document.querySelector('.answer')

let questionCount = 0;

const loadQuestion = () =>{
    const questionList = quizDB[questionCount];

    question.innerText=questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem) => {
       if(curAnsElem.checked){
           answer= curAnsElem.id;
       }
       return answer;
    })
};

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
})