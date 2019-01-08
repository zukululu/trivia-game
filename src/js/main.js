let questions = 
[
    {
        question: 'Question 1',
        answer: 'hello1',
        choices: [
                    'hello1',
                    'hello2',
                    'hello3',
                    'hello4',
                    'hello5'
                 ]
    },
    {
        question: 'Question 2',
        answer: 'hello2',
        choices: [
                    'hello1',
                    'hello2',
                    'hello3',
                    'hello4',
                    'hello5'
                 ]
    },
    {
        question: 'Question 3',
        answer: 'hello3',
        choices: [
                    'hello1',
                    'hello2',
                    'hello3',
                    'hello4',
                    'hello5'
                 ]
    },
    {
        question: 'Question 4',
        answer: 'hello4',
        choices: [
                    'hello1',
                    'hello2',
                    'hello3',
                    'hello4',
                    'hello5'
                 ]
    },
    {
        question: 'Question 5',
        answer: 'hello5',
        choices: [
                    'hello1',
                    'hello2',
                    'hello3',
                    'hello4',
                    'hello5'
                 ]
    },
]

const discardQuestions = []
const btn = document.querySelector('#click-me')
const check = document.querySelector('.check-answer')
const user = document.querySelectorAll('.answer')
check.addEventListener('click', checkAnswer)
btn.addEventListener('click', nextQuestion)
let correctAnswer = ''
let userAnswer = ''
let points = 0
let discardChoice = []

document.querySelector('button.check-answer').style.visibility = 'hidden'

user.forEach( obj => obj.addEventListener('click', pickAnswer) )

function pickAnswer() 
{
    userAnswer = event.target.innerHTML
}

function checkAnswer() 
{
    if(userAnswer === correctAnswer) {
        points++ 
        console.log('+1')
    } else {
        console.log('WRONG')
    }
    user.forEach( (obj) => {
        obj.disabled = true
    })
    check.disabled = true
    btn.disabled = false

}

function nextQuestion() 
{
    document.querySelector('button.check-answer').style.visibility = 'initial'
    let randomQuestion = getRandomQuestion(questions)           //gets question
    correctAnswer = randomQuestion.answer
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
        check.disabled = true
        btn.disabled = true
        user.forEach( (obj) => {
            obj.disabled = true
        })
        return
    }
    user.forEach( (obj) => {
        obj.disabled = false
    })
    btn.disabled = true
    check.disabled = false
    generateChoices();
    discardChoice = []
    console.log(randomQuestion.choices)

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
            return obj.question
        }).indexOf(randomQuestion.question)
        discardQuestions.push(discardIndex)
    }
    function generateChoices()
    {   
        for(let i = 0; i < 5; i++)
        {
            let newButton = document.createElement('button')                    //create button
            newButton.className = 'answer'                                      //give button class of .answer
            newButton.addEventListener('click', pickAnswer)                     //allow button to change user's answer
            newButton.innerHTML = randomQuestion.choices[i]             //change button's innerhtml to choice
            const box = document.querySelector('.question-box')                 //select which element to place it inside
            box.appendChild(newButton)                                          //append button to element
        }
    }
}