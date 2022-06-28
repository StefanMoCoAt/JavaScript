const input = require('sync-input');


function greet(bot_name, birth_year) {
    console.log("Hello! My name is " + bot_name + ".");
    console.log("I was created in " + birth_year + ".");
}

function remind_name() {
    console.log("Please, remind me your name.");
    let name = input();
    console.log("What a great name you have, " + name + "!");
}

function guess_age() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(input());
    let rem5 = Number(input());
    let rem7 = Number(input());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(input());
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

const exercises = [
    exercise1 = {
        question: "Why do we use methods?",
        answer1: "To repeat a statement multiple times.",
        answer2: "To decompose a program into several small subroutines.",
        answer3: "To determine the execution time of a program.",
        answer4: "To interrupt the execution of a program.",
        result: "2"
    }
];

function test() {
    console.log("Let's test your programming knowledge.");

    let passed = false;

    while (!passed) {

        let questionCounter = exercises.length;
        let rightAnswerCounter = 0;

        for (let i = 0; i < exercises.length;) {

            console.log(exercises[i].question);
            console.log("1. " + exercises[i].answer1);
            console.log("2. " + exercises[i].answer2);
            console.log("3. " + exercises[i].answer3);
            console.log("4. " + exercises[i].answer4);

            while (Number(input() !== exercises[i].result)) {
                console.log("Please, try again.");
            }

            rightAnswerCounter++;
            i++;
        }

        if (questionCounter === rightAnswerCounter) {
            passed = true;
        }
    }

}

function end() {
    console.log("Completed, have a nice day!");
    console.log("Congratulations, have a nice day!");
}


greet('MoBot', '2022')  // change it as you need
remind_name();
guess_age();
count();
test();
end();
