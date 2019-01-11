# Trivia-Game
## Table of Contents
- Description
- Running Screenshot
- Features
- Technologies Used
- Installation Instructions
- Approach

## Description
This trivia is a test to see the user's knowledge of Nintendo's popular character Mario! The game will start its timer when the user presses the START GAME button, and continues to count until the user answers all the questions or until the counter reaches 0. The user will be scored based on how quickly they answer the question. Their score will be displayed after the timer ends, whether they answer every question or the timer runs out.

## Running Screenshot
<img src='https://i.gyazo.com/d5a7a1fc5093e6ced25c2229610fc335.jpg'>

## Features
- Self-scored
  - The game will score itself and display the score, reducing the need for the user to score themselves.
  - Score is still displayed even if the timer runs out, so everyone feels like a winner.
- Buttons disappear and reappear based on the sequence of the game.
- Buttons and choices will fade or reappear based on sequence of the game.
  - Prevents user from scoring multiple points by repeatedly pressing the check answer button.
### Features to Add
- Display whether the answer is correct or not.
  
## Technologies Used
- HTML
- CSS
- JavaScript

## Installation Instructions
1. Visit the [repo](https://github.com/zukululu/trivia-game) and **fork it**, then **clone it**.
  - <img src='https://i.gyazo.com/d0035d8c347c459d4c9f58b8e9b8af86.png'>
  - <img src='https://i.gyazo.com/231392f54fbf3c9fdfdecb9bbad58970.png'>
  - Copy the HTTPS or the SSH link and use the **git clone** command in your terminal.
  - The command should resemble this: ```git clone https://github.com/zukululu/trivia-game.git```
2. After successfully cloning, locate the folder within your computer.
3. Open the index.html file within your browser.
4. Test your Mario knowledge!

## Approach
- The very first thing I decided to do was to create a written plan that I can constantly refer to. I wanted to be 100% of the bare minimums that I needed to do, which was to **ask a question**, **generate choices**, **receive and compare the user's answer to the question's correct answer**, and then to **generate the next question**, all while there is a **timer running**.
  - I used my notebook before putting any time on Visual Studio, so I don't get stressed by looking at a blank sheet of code.
- After laying out all of these bare requirements, I began to plan out the functions that I would need and whether they would need to be nested or not. If they were, where they would be nested. 
  - This allowed me to plan out how the functions would interact with each other and with the game itself.
- After planning the logic of the game, I planned for the layout of the website itself. I sketched a few layout options and ended up not using any of them and created a simple layout on the fly, referencing personality quizzes that were on Nintendo's official website.
- The planning made the coding process itself relatively easy for me, as I already had a roadmap of what I wanted. I believe this also made troubleshooting and debugging problems easier since I was able to map out how I wanted the functions to interact with each other, and if I ran into an error I quickly tried another solution until I reached one that I was satisfied with.

## Problems Reached and Solved
- One of the main problems that I had reached was while trying to create a bonus where, instead of having a timer, I would have a GIF of Mario running and have it take 60 seconds to travel across screen. After Mario leaves screen, the quiz would end.
  - This bonus was eventually dropped due to time constrains.
- One of the things that I originally planned to do was to, instead of having buttons created in the HTML, was to delete the buttons every time a question was answered and to generate new buttons with the new answers within them. I found this incredibly time consuming and a waste of code, while also being highly unnecessary since it would shift the layout for a second before fixing itself.
  - I decided to forego this decision and simply change the content of the buttons, and to hide the buttons whenever they were not in use.
- There were two big problems I had while generating the next question, one of which were related to the previous bullet point. The first, being that a question that had already been asked might be asked again. The second was that sometimes too many choices would be generated.
  - The first problem was solved by **creating a new array to push asked questions into**, **find the index of every item**, **get the index of the question as it's being generated**, **check to see if the discard array contains it**, and to **call the function again if it has**. 
  - The second problem was actually never **solved**, but it was worked around by re-creating the original 5 buttons and simply changing the innerHTML of each one. This did not prevent the function from being called multiple times with each button click, but it **did** only show the choices once.
