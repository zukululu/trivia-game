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
                  choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
            },
            {
                  choiceDesc: 'Jumpman',
                  choiceImg: 'https://sg.fiverrcdn.com/photos/115852140/original/dbe5a04069060fdae78624a5e3746e8bf7fc705d.png?1534507584'
            },
            {
                  choiceDesc: 'Dario',
                  choiceImg: 'https://ae01.alicdn.com/kf/HTB1CvRqOXXXXXbBaXXXq6xXFXXXs/Custom-Canvas-Art-Super-Mario-Poster-Super-Mario-Bros-Wall-Stickers-Mario-Wallpaper-Video-Game-Mural.jpg'
            },
            {
                  choiceDesc: 'Pewdiepie',
                  choiceImg: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d9/Mario_%28New_Super_Mario_Bros._2%29.png/revision/latest?cb=20120709145048&path-prefix=en'
            },
            {
                choiceDesc: 'Mar.io',
                choiceImg: 'https://vignette.wikia.nocookie.net/central/images/6/63/Mario_Star.png/revision/latest?cb=20150823184403'
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
        let theQuestion = document.querySelector('.question-box')
        theQuestion.innerHTML = `<h1>You lose!</h1>`
        check.remove()                                       //disables check answer button
        btn.remove()                                         //disables this button
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