let questions = 
[
    {
        question: 'What year was Mario created?' ,
        answer: '1983',
        choices: [
            {
                  choiceDesc: '1964',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: '1973',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: '1983',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: '1990',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                choiceDesc: '1952',
                choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            }
                 ]
    },
    {
        question: `Who is Mario's brother?`,
        answer: 'Luigi',
        choices: [
            {
                  choiceDesc: 'Toad',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Wario',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Bowser',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Shy Guy',
                  choiceImg: 'https://images.wallpaperscraft.com/image/mario_mushroom_vector_95897_1280x1280.jpg'
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
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Bowser',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Boo',
                  choiceImg: 'https://images.wallpaperscraft.com/image/mario_mushroom_vector_95897_1280x1280.jpg'
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
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Jumpman',
                  choiceImg: 'https://images.wallpaperscraft.com/image/mario_mushroom_vector_95897_1280x1280.jpg'
            },
            {
                  choiceDesc: 'Dario',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Pewdiepie',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
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
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Brooklyn, New York',
                  choiceImg: ''
            },
            {
                  choiceDesc: 'Narnia',
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                choiceDesc: 'Mushroom Kingdom',
                choiceImg: ''
            }
                 ]
    },
]

const discardQuestions = []
let start = document.querySelector('.starter')
let btn = document.querySelector('.next-question')
let check = document.querySelector('.check-answer')
let user = document.querySelectorAll('.answer')
let timer = document.querySelector('.counter')
let correctAnswer = ''
let userAnswer = ''
let points = 0
let timeLeft = 10
let score = 0;
start.addEventListener('click', startGame)
check.addEventListener('click', checkAnswer)
btn.addEventListener('click', nextQuestion)

check.style.visibility = 'hidden'
btn.style.visibility = 'hidden'
user.forEach( value => value.style.visibility = 'hidden')
user.forEach( (obj) => { 
    obj.addEventListener('click', function pickAnswer() 
    {
        userAnswer = event.target.innerHTML
    }) 
})

function startGame() {
    start.remove()
    setInterval(countdown, 1000)
    btn.style.visibility = 'visible'
    btn.style.opacity = 0.5
    nextQuestion()
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

function checkAnswer() 
{
    if(userAnswer === correctAnswer) {
        score += timeLeft
        console.log(score)
    } else {
        console.log('WRONG')
    }
    user.forEach( (obj) => {
        obj.style.opacity = 0.5
        obj.disabled = true
    })
    check.style.opacity = 0.5
    btn.style.opacity = 1
    check.disabled = true
    btn.disabled = false


}

function nextQuestion() 
{
    user.forEach( (value) => {
        value.style.visibility = 'visible'
        value.style.opacity = 1
    })
    check.style.visibility = 'visible'
    check.style.opacity = 1

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
        theQuestion.innerHTML = `<h1>You've completed the quiz!</h1><br><p>Your score is ${score}!</p>`
        check.remove()                                       //disables check answer button
        btn.remove()                                         //disables this button
        user.forEach( value => value.style.visibility = 'hidden')   //hides choices
        timeLeft = 0;
        timer.remove()
        console.log(score)
        return                                                      //ends function
    }
    user.forEach( (obj) => {                                        //enables all buttons
        obj.style.opacity = 1
        obj.disabled = false
    })
    timeLeft = 10
    btn.style.opacity = 0.5
    check.style.opacity = 1
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
            user[i].style.backgroundImage = `url(${randomQuestion.choices[i].choiceImg})`
        }
    }
}