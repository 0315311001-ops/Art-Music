console.log("Javascript file loaded")

displayQuestion();
let questions = [
    {
        question: "Whos your Favorite Female Artist?",
        option1: "Ariana Grande",
        option2: "Billie Eilish",
        option3: "Doja Cat",
        option4: "Melanie Martinez",
        option5: "Tate McRae",
        option6: "SZA",
        option7: "Other",


    },
    {
        question: "Whos your Favorite Male Artist?",
        option1: "Michael Jackaon",
        option2: "Justin Bieber",
        option3: "Troye Sivan",
        option4: "The Weeknd",
        option5: "Harry Styles",
        option6: "Bad Bunny",
        option7: "Other",
    },
    {
        question: "What is your type of Music",
        option1: "Pop",
        option2: "R&B",
    }
];

    // TODD: Declare an empty array that will hold the user's answer
    let userAnswers = [];

    // TODD: Declare a variable to keep track to each questions (index) we are on
    let index = 0;