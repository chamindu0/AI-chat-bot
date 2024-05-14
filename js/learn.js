import { knowledgeBase } from "./knowledgeBase.js";
let userQuestion = "";

export default function selfLearn(userMessage) {
    let chatBotMessage = "";

    if (userQuestion === "") {
        // First time invocation: Get the user's question
        userQuestion = userMessage;
        chatBotMessage = "I don't know about that. Can you teach me?";
    } else {
        // Second time invocation: Get the user's answer
        const userAnswer = userMessage;
        
        // Update the knowledge base with the new question-answer pair
        knowledgeBase.push({ message: userQuestion, response: userAnswer });
        chatBotMessage = "Thank you, I'll remember that.";

        // Reset the userQuestion for the next interaction
        userQuestion = "";

    
    }

    return chatBotMessage;

}
