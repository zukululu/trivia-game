let questions = 
[
    {
        question: 'Question 1',
        answer: 'hello'
    },
    {
        question: 'Question 2',
        answer: 'hello'
    },
    {
        question: 'Question 3',
        answer: 'hello'
    },
    {
        question: 'Question 4',
        answer: 'hello'
    },
    {
        question: 'Question 5',
        answer: 'hello'
    },
]

const discardQuestions = []
const btn = document.querySelector('#click-me')
btn.addEventListener('click', nextQuestion)

function nextQuestion() 
{
    let randomQuestion = getRandomQuestion(questions)           //gets question
    let questionIndex = questions.map( (obj) =>                 //gets index of question
    {
        return obj.question;
    }).indexOf(randomQuestion.question)
    if(discardQuestions.includes(questionIndex) === true){       //checks to see if question has been asked already
        nextQuestion()                                          //if it has, run the function again
        console.log('hello')
    }

    if(discardQuestions.includes(questionIndex) === false)
    {
        itemRemove(questions)
        let theQuestion = document.querySelector('.question-box')   //if it hasn't, run the rest: display the question
        theQuestion.innerHTML = randomQuestion.question
        console.log('gj')
    }
    if(discardQuestions.length >= 5)                                 //ends the quiz
    {
        let theQuestion = document.querySelector('.question-box')
        theQuestion.innerHTML = `<h1>You've completed the quiz!</h1>`
    }

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
        console.log(discardQuestions)
    }

}