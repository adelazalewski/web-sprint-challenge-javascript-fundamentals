# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

-map returns a new array, it needs the return keyword, does not mutate the array; forEach and map both accept a callback function as an argument which means they are both higher order functions; forEach on the other hand doesnt return a new array and return is optional.

2. Explain the difference between a callback and a higher order function.

-callback is the function that's being passed as an argument to the higher order function and the higher order function is the one that accepts the callback function as an argument they go hand in hand.

3. What is closure?

-functions reach out and grab and use variables(WHEN NEEDED) that are not defined inside the function itself but on the global scope/outer scope, BUT 2. A CLOSURE IS LIKE A BACKPACK THAT LOOKS AND TAKES(USES)THE VARIABLE THAT IS "STORED" INSIDE ALREADY, IN THE LOCAL EXECUTING CONTEXT/SCOPE AND ONCE THE FUNCTION IS DONE IT PUTS IT BACK IN THE BACKPACK(keeps it in memory), AND IS NOT BEING DELETED/forgoten ONCE THE FUNCTUION IS DONE

4. Describe the four rules of the 'this' keyword.

1. global/window principal = when this is not specified when the function is called then "this" is binded to the window console. 
  2. implicite binding = when our object has a method that returns a function (and uses properties from the object) when calling that function were calling it as a property of the object it was defined in and whats to the left of the dot "." for when you call the function thats the object that this is binded to.
  3. explicit bindeing= is when using the .call .apply and .bind methods they help with binding the this keyword to the object
  4.new binding = impplies the usage of a constructor function that is names with the first letter capital(i.e. function Person()) and when the function is called you call it using the new keyword and that binds the this with the object that you're using as an argument for that constructor function. 

5. Why do we need super() in an extended class?

-extends and super are crucial when using the class keyword as a constructor function because with the help of them we bind the this keyword to the object that the function creates automaticly and we dont need the help of .call() or .apply() anymore. 
IN OTHER WORDS: CONSTRUCTOR CALLS ON THE PROPERTIES THAT WE PUT INTO THE PARENT TO THE CHILD OBJECT AND SUPER IS GONNA PUT THOES PROPERTIES BACK UP INTO THE PARENT OBJECT AND WHEN WE "EXTEND", THE "THIS" KEYWORD IS GONNA BE BINDED AND IT'S GOING TO USE THE PARENT'S PROPERTIES

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

> This section should include instruction for the sprint challenge. These should only cover things that are _not_ being evaluated by the challenge itself, e.g. environment/project setup, link to a starter project, etc. In general, this will be the following Git fork, clone, branch, commit, push, create pull request flow, though may need to be adapted for some specific challenges.

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


