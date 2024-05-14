//remember user name

let userName = "";
export default function rememberName(messages) {
  if (messages !== "") {
    // Check if the user mentions their name
    if (messages.toLowerCase().includes("name")) {
      // Extract the name from the message
      userName = messages.split("my name is")[1].trim();
      return "Nice to meet you, " + userName + "!";
    } else if (messages.toLowerCase().includes("i am")) {
      userName = messages.split("i am")[1].trim();
      return "Hi!, " + userName;
    } else if (messages.toLowerCase().includes("i'm")) {
      userName = messages.split("i'm")[1].trim();
      return "Hello!, " + userName;
    } else if (messages.toLowerCase().includes("bye")) {
      return "Goodbye, " + userName + "!"; // Responding to "bye" with the user's name
      
    } else if (messages.toLowerCase().includes("goodbye")) {
      return "Goodbye, " + userName + "!"; // Responding to "bye" with the user's name
      
    } else if (messages.toLowerCase().includes("i leave")) {
      return "Goodbye, " + userName + "!"; // Responding to "bye" with the user's name
     
    }
 
  }
       // Default return value when none of the conditions are met
     return "Sorry, I didn't understand that.";
}

