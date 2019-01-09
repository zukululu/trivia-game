let questions = 
[
    {
        question: 'What year was Mario created?' ,
        answer: '1983',
        choices: [
            {
                  choiceDesc: '1964',
                  choiceImg: ''
            },
            {
                  choiceDesc: '1973',
                  choiceImg: ''
            },
            {
                  choiceDesc: '1983',
                  choiceImg: ''
            },
            {
                  choiceDesc: '1990',
                  choiceImg: ''
            },
            {
                choiceDesc: '1952',
                choiceImg: ''
            }
                 ]
    },
    {
        question: `Who is Mario's brother?`,
        answer: 'Luigi',
        choices: [
            {
                  choiceDesc: 'Toad',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Wario',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Bowser',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Shy Guy',
                  choiceImg: ''
            },
            {
                choiceDesc: 'Luigi',
                choiceImg: ''
            }
                 ]
    },
    {
        question: `Who is Mario's first enemy?`,
        answer: 'Donkey Kong',
        choices: [
            {
                  choiceDesc: 'Donkey Kong',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Bowser',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Boo',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Chomper',
                  choiceImg: ''
            },
            {
                choiceDesc: 'Toad',
                choiceImg: ''
            }
                 ]
    },
    {
        question: `What was Mario's original name?`,
        answer: 'Jumpman',
        choices: [
            {
                  choiceDesc: 'Mario',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Jumpman',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Dario',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Pewdiepie',
                  choiceImg: ''
            },
            {
                choiceDesc: 'Mar.io',
                choiceImg: ''
            }
                 ]
    },
    {
        question: `Where is Mario from?`,
        answer: 'Brooklyn, New York',
        choices: [
            {
                  choiceDesc: 'Italy',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Mexico',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Brooklyn, New York',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Narnia',
                  choiceImg: ''
            },
            {
                choiceDesc: 'Mushroom Kingdom',
                choiceImg: ''
            }
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
let score = 0;

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
        score += timeLeft
        console.log(score)
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
        console.log(score)
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
            user[i].innerHTML = randomQuestion.choices[i].choiceDesc             //change button's innerhtml to choice
        }
    }
}