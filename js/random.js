// Define possible responses for specific questions
var randomResponses = {
    "tell me a joke": [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        // Add more joke responses as needed
    ],
    // Add more questions and their possible responses as needed
};

// Define the knowledgeBase array
var knowledgeBase = [
    {
        message: "tell me a joke",
        response: function() {
            // Get random joke response for the specified question
            var jokes = randomResponses["tell me a joke"];
            var randomIndex = Math.floor(Math.random() * jokes.length);
            return jokes[randomIndex];
        }
    },

];