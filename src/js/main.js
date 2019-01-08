let questions = 
[
    {
        question: 'Question 1',
        answer: 'hello1'
    },
    {
        question: 'Question 2',
        answer: 'hello2'
    },
    {
        question: 'Question 3',
        answer: 'hello3'
    },
    {
        question: 'Question 4',
        answer: 'hello4'
    },
    {
        question: 'Question 5',
        answer: 'hello5'
    },
]

const discardQuestions = []
const btn = document.querySelector('#click-me')
const check = document.querySelector('.check-answer')
const user = document.querySelectorAll('.answer')
check.addEventListener('click', checkAnswer)
let correctAnswer = ''
let userAnswer = ''
let points = 0
btn.addEventListener('click', nextQuestion)

user.forEach( obj => obj.addEventListener('click', pickAnswer) )

function pickAnswer() 
{
    userAnswer = event.target.innerHTML
    console.log(userAnswer)
}

function checkAnswer() 
{
    if(userAnswer === correctAnswer) {
        points++ } else {
        console.log('WRONG')
    }
    user.forEach( (obj) => {
        obj.disabled = true
    })
    check.disabled = true
    btn.disabled = false
    console.log(points)
}

function nextQuestion() 
{
    let randomQuestion = getRandomQuestion(questions)           //gets question
    correctAnswer = randomQuestion.answer
    console.log(correctAnswer)
    let questionIndex = questions.map( (obj) =>                 //gets index of question
    {
        return obj.question;
    }).indexOf(randomQuestion.question)
    if(discardQuestions.includes(questionIndex) === true){       //checks to see if question has been asked already
        nextQuestion()                                          //if it has, run the function again
    }

    if(discardQuestions.includes(questionIndex) === false)
    {
        itemRemove(questions)
        let theQuestion = document.querySelector('.question-box')   //if it hasn't, run the rest: display the question
        theQuestion.innerHTML = randomQuestion.question
    }
    if(discardQuestions.length >= 5)                                 //ends the quiz
    {
        let theQuestion = document.querySelector('.question-box')
        theQuestion.innerHTML = `<h1>You've completed the quiz!</h1>`
    }
    user.forEach( (obj) => {
        obj.disabled = false
    })
    btn.disabled = true
    check.disabled = false

    function getRandomQuestion(arr)
    {
        let randomQuestion = Math.floor(Math.random() * 5)
        let question = questions[randomQuestion]
        return question
    }
    function itemRemove(arr)
    {
        const discardIndex = questions.map( (obj) =>
        {
            return obj.question;
        }).indexOf(randomQuestion.question)
        discardQuestions.push(discardIndex)
    }

}