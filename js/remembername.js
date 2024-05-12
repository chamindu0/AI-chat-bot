import { appendMessage } from "./script.js";

//remember user name

let userName = ''; 
export default function rememberName(message) {

      if (message !== '') {
        // Check if the user mentions their name
        if (message.toLowerCase().includes("name")) {
          // Extract the name from the message
          userName = message.split('my name is')[1].trim();
          appendMessage('Nice to meet you, ' + userName + '!');
        }else if (message.toLowerCase().includes("i am")){
          userName = message.split('i am')[1].trim();
          appendMessage('Hi!, ' + userName );
        }else if (message.toLowerCase().includes("i'm")){
          userName = message.split('i\'m')[1].trim();
          appendMessage('Hello!, ' + userName );
        }else if (message.toLowerCase().includes('bye')) {
          appendMessage( 'Goodbye, ' + userName + '!'); // Responding to "bye" with the user's name
          userName = ''; // Clear the stored name
        }else if (message.toLowerCase().includes('goodbye')) {
          appendMessage( 'Goodbye, ' + userName + '!'); // Responding to "bye" with the user's name
          userName = '';
        }else if (message.toLowerCase().includes('i leave')) {
          appendMessage( 'Goodbye, ' + userName + '!'); // Responding to "bye" with the user's name
          userName = '';
        }
      }
    }

