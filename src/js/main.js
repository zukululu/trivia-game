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

const btn = document.querySelector('#click-me')
btn.addEventListener('click', nextQuestion)

function nextQuestion() 
{
    let randomQuestion = getRandomQuestion(questions)
    let theQuestion = document.querySelector('.question-box')
    theQuestion.innerHTML = randomQuestion.question
    itemRemove(questions)


    function getRandomQuestion(arr)
    {
        let randomQuestion = Math.round(Math.random() * 5)
        let question = questions[randomQuestion]
        return question
    }
    function itemRemove(arr)
    {
        const discardQuestions = questions.map( (obj) =>
        {
            return obj.question;
        }).indexOf(randomQuestion.question)
        console.log(discardQuestions)
    }
}