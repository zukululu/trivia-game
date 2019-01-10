let questions = 
[
    {
        question: 'What year was Mario created?' ,
        answer: '1983',
        choices: [
            {
                  choiceDesc: '1964',
                  choiceImg: 'https://art.pixilart.com/5000fb0e1d2c04e.png'
            },
            {
                  choiceDesc: '1973',
                  choiceImg: 'https://i.imgur.com/8nkj3Jm.gif'
            },
            {
                  choiceDesc: '1983',
                  choiceImg: 'https://images-na.ssl-images-amazon.com/images/I/61uPeYjWZmL._SY550_.jpg'
            },
            {
                  choiceDesc: '1990',
                  choiceImg: 'https://pngimage.net/wp-content/uploads/2018/06/mario-bros-pixel-png-6.png'
            },
            {
                choiceDesc: '1952',
                choiceImg: 'https://ih0.redbubble.net/image.423157982.7742/flat,550x550,075,f.u6.jpg'
            }
                 ]
    },
    {
        question: `Who is Mario's brother?`,
        answer: 'Luigi',
        choices: [
            {
                  choiceDesc: 'Toad',
                  choiceImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png'
            },
            {
                  choiceDesc: 'Wario',
                  choiceImg: 'https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Wario.5fb367ea.png'
            },
            {
                  choiceDesc: 'Bowser',
                  choiceImg: 'https://vignette.wikia.nocookie.net/mario/images/1/1e/Bowser_%28New_3ds_verison%29.png/revision/latest?cb=20180129223045'
            },
            {
                  choiceDesc: 'Shy Guy',
                  choiceImg: 'https://www.mariowiki.com/images/thumb/7/70/ShyGuyCTTT_artwork.png/200px-ShyGuyCTTT_artwork.png'
            },
            {
                choiceDesc: 'Luigi',
                choiceImg: 'https://vignette.wikia.nocookie.net/wii/images/d/d7/406px-Luigi_Artwork_-_Super_Mario_3D_World.png/revision/latest?cb=20140121131452'
            }
                 ]
    },
    {
        question: `Who is Mario's first enemy?`,
        answer: 'Donkey Kong',
        choices: [
            {
                  choiceDesc: 'Donkey Kong',
                  choiceImg: 'https://vignette.wikia.nocookie.net/fantendo/images/b/b5/SuperMarioParty_DonkeyKong.png/revision/latest?cb=20181005213911'
            },
            {
                  choiceDesc: 'Bowser',
                  choiceImg: 'https://www.mariowiki.com/images/thumb/e/ea/SMO_Art_-_Bowser.png/240px-SMO_Art_-_Bowser.png'
            },
            {
                  choiceDesc: 'Boo',
                  choiceImg: 'https://vignette.wikia.nocookie.net/nintendo/images/8/83/King_boo.png/revision/latest?cb=20150419133611&path-prefix=en'
            },
            {
                  choiceDesc: 'Chomper',
                  choiceImg: 'https://www.mariowiki.com/images/thumb/a/a9/ChainChompMP8.png/300px-ChainChompMP8.png'
            },
            {
                choiceDesc: 'Toad',
                choiceImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png'
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
                  choiceImg: 'https://www.domondonart.com/wp-content/uploads/2016/06/VeniceItaly-restaurant-600x600.jpg'
            },
            {
                  choiceDesc: 'Mexico',
                  choiceImg: 'https://ei.marketwatch.com/Multimedia/2017/07/12/Photos/ZH/MW-FQ172_mexico_20170712201825_ZH.jpg?uuid=c969d03c-6760-11e7-a0ec-9c8e992d421e'
            },
            {
                  choiceDesc: 'Brooklyn, New York',
                  choiceImg: 'https://gotraveltipster.com/wp-content/uploads/2018/04/IMG_0300-web.jpg'
            },
            {
                  choiceDesc: 'Narnia',
                  choiceImg: 'https://i.pinimg.com/originals/9e/e1/7d/9ee17d26c8d840c1ee9f57a18157a6de.jpg'
            },
            {
                choiceDesc: 'Mushroom Kingdom',
                choiceImg: 'https://vignette.wikia.nocookie.net/everything-super-mario-odyssey/images/4/4b/Mushroom_kingdom_odyssey_3_by_banjo2015-dbt59q2.jpg/revision/latest?cb=20180112180041'
            }
                 ]
    },
]

const discardQuestions = []
let characterSprite = document.querySelector('.mario')
let start = document.querySelector('.starter')
let btn = document.querySelector('.next-question')
let check = document.querySelector('.check-answer')
let user = document.querySelectorAll('.answer')
let timer = document.querySelector('.counter')
let walk = document.querySelector('.walkway')
let correctAnswer = ''
let userAnswer = ''
let points = 0
let timeLeft = 60
let score = 0;
let countdownTimer
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
    // walk.classList.add = 'walking'
    // console.log(walk.classList)
    start.style.visibility = 'hidden'
    characterSprite.style.marginTop = '5px'
    characterSprite.style.height = '100px'
    characterSprite.style.width = '100px'
    characterSprite.style.backgroundImage = `url('https://i.gifer.com/origin/ac/acf3abb6da430dd78cc99f925bb52d49_w200.gif')`
    countdownTimer = setInterval(countdown, 1000)
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
        console.log(`Time left: ${timeLeft}`)
        timer.innerHTML = `Time left: ${timeLeft}`
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
        clearTimeout(countdownTimer)
        let theQuestion = document.querySelector('.question-box')
        theQuestion.innerHTML = `<h1>You've completed the quiz!</h1><p class='score'>Your score is ${score}!</p>`
        check.remove()                                       //disables check answer button
        btn.remove()                                         //disables this button
        timeLeft = 0
        timer.remove()
        user.forEach( value => value.style.visibility = 'hidden')   //hides choices
        return                                                      //ends function
    }
    user.forEach( (obj) => {                                        //enables all buttons
        obj.style.opacity = 1
        obj.disabled = false
    })
    userAnswer = ''
    btn.style.opacity = 0.5
    check.style.opacity = 1
    btn.disabled = true                                             //disables this button
    check.disabled = false                                          //enables check answer button

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