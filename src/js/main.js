let questions = 
[
    {
        question: 'What year was Mario created?' ,
        answer: '1983',
        choices: [
                    '1964',
                    '1973',
                    '1983',
                    '1990',
                    '1953'
                 ]
    },
    {
        question: `Who is Mario's brother?`,
        answer: 'Luigi',
        choices: [
                    'Toad',
                    'Wario',
                    'Bowser',
                    `He doesn't have one!`,
                    'Luigi'
                 ]
    },
    {
        question: `Who is Mario's first enemy?`,
        answer: 'Donkey Kong',
        choices: [
                    'Donkey Kong',
                    'Bowser',
                    'Boo',
                    'Chomper',
                    'Toad'
                 ]
    },
    {
        question: `What was Mario's original name?`,
        answer: 'Jumpman',
        choices: [
                    'Mario',
                    'Jumpman',
                    'Dario',
                    'Super Deluxe Hatman Jr.',
                    'George Washington Carver Jr III'
                 ]
    },
    {
        question: `Where is Mario from?`,
        answer: 'Brooklyn, New York',
        choices: [
                    'Italy',
                    'Mexico',
                    'Narnia',
                    'Brooklyn, New York',
                    'Mushroom Kingdom'
                 ]
    },
]

const discardQuestions = []
let btn = document.querySelector('#click-me')
let check = document.querySelector('.check-answer')
let user = document.querySelectorAll('.answer')
let timer = document.querySelector('.counter')
check.addEventListener('click', checkAnswer)
btn.addEventListener('click', nextQuestion)
let correctAnswer = ''
let userAnswer = ''
let points = 0
let timeLeft = 10

document.querySelector('button.check-answer').style.visibility = 'hidden'
user.forEach( value => value.style.visibility = 'hidden')

user.forEach( (obj) => { 
    obj.addEventListener('click', function pickAnswer() 
    {
        userAnswer = event.target.innerHTML
    }) 
})
let countdownTimer = setInterval(countdown, 1000)



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

function countdown() 
{
    if(timeLeft === 0)
    {
        clearTimeout(countdownTimer)
        let theQuestion = document.querySelector('.question-box')
        theQuestion.innerHTML = `<h1>You lose!</h1>`
        check.disabled = true                                       //disables check answer button
        btn.disabled = true                                         //disables this button
        user.forEach( value => value.style.visibility = 'hidden')   //hides choices
        timer.style.visibility = 'hidden'
    } else {
        timer.innerHTML = `${timeLeft} seconds remaining!`
        timeLeft--
    }
}

function nextQuestion() 
{
    user.forEach( value => value.style.visibility = 'initial')
    document.querySelector('button.check-answer').style.visibility = 'initial'
    let randomQuestion = getRandomQuestion(questions)           //gets question
    correctAnswer = randomQuestion.answer    
    generateChoices();                                              //creates 5 answer choices
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
        check.disabled = true                                       //disables check answer button
        btn.disabled = true                                         //disables this button
        user.forEach( value => value.style.visibility = 'hidden')   //hides choices
        return                                                      //ends function
    }
    user.forEach( (obj) => {                                        //enables all buttons
        obj.disabled = false
    })
    timeLeft = 60
    btn.disabled = true                                             //disables this button
    check.disabled = false                                          //enables check answer button

    console.log(discardQuestions)

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
            user[i].innerHTML = randomQuestion.choices[i]             //change button's innerhtml to choice
        }
    }
}