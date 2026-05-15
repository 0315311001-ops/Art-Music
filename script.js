    console.log("Javascript file loaded")

    function selectAnswer(chosenOption) {
        // Save the user's answer to the array
        userAnswer.push(chosenOption);
        let currentQuestions = question[index];

        // Move to the next question
        index = index + 1;

        // Check if there are more questions left
        if (index < questions.length) {
            displayQuestion();
            
        }

        // Display the questions
        document.getElementById("question-text").innerText = currentQuestion.question;

        // Display the options ( you'll need to create buttons or elemtens for these)
    }

    function selectAnswer(chosenQuestion) {
        // Add the answer to userAnswers array
        userAnswer.push(chosenOption);

        // Move to next question
        index = index + 1;

        // Check if there are ore questions
        if (index < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }

        function showResults() {
            // This is where the "art" part happens!
            console.log("User's music perference:" , userAnswers);
        }

        document.getElementById("option1").onclick = function() {
            selectAnswer(currentQuestion.option1);
        };
1    }

    let questions = [
    {
        question: "What is your type of Music",
        option1: "Pop",
        option2: "R&B",
        option3: "Hip-Hop",
        option4: "Rap",
        option5: "Rock",
        option6: "Jazz",
        option7: "Country",
    },
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

    function selectAnswer() {
        let onClick = questions [index];

        // Display the question
        document.getElementById("question-text").innerText = currentQuestion.question;

        // Display all 7 options
        document.getElementById("question-text").innerText = currentQuestion.question;

    
    }
];

    // TODD: Declare an empty array that will hold the user's answer
    let userAnswers = [];

    // TODD: Declare a variable to keep track to each questions (index) we are on
    let index = 0;