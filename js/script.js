
import knowledgeBase from "./knowledgeBase.js";
import selfLearn from "./learn.js";

var sendBtn = document.getElementById("sendBtn");
export var textbox = document.getElementById("textInput");
var image = document.getElementById("image");

// Collapsible

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



const events = [
  { name: 'Event 1', date: 'May 15, 2024', location: 'Main Hall' },
  { name: 'Event 2', date: 'June 10, 2024', location: 'Auditorium' }
];

//handle user Messages

function sendMessage(userMessage) {
  var messageElement = document.createElement("div");

  messageElement.innerHTML =
    '<p class="userText"><span>' + userMessage + "</span>";
  $("#textInput").val("");
  $("#chatbox").append(messageElement);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//handle Chatbot Messages
function chatBotRespond(userMessage) {
  let chatBotMessage= "";

  if (userMessage == "") {
    chatBotMessage =
      "Hey buddy!! say something to me, I am too bored now,let's have a little fun";
  }
  
  //fillter message from the knowledge base
  if (userMessage != "") {
    var result = knowledgeBase.find(val =>
    userMessage.toLowerCase().startsWith(val.message.toLowerCase()));
    console.log(result);

    if ( result && typeof result.response === 'function') {
        chatBotMessage = result.response(userMessage);
    } else if ( result && typeof result.response === 'string') {
        chatBotMessage = result.response;
      
   
    }else if (userMessage.toLowerCase().includes("events")){
    fetch('http://127.0.0.1:5501/server/events.txt')
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\\n'); // Split the text into lines
      const formattedLines = lines.map(line => `${line}<br>`).join(''); // Add HTML line breaks
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `<p class="botText"><span>I can help you manage a wide range of events,including:<br>${formattedLines} </span>`;
      $("#chatbox").append(messageElement);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
 
    })
   
     
    } else if (userMessage.toLowerCase().includes("schedule")){

  
     events.forEach((event, index) => {
     chatBotMessage += `Event ${index + 1}: ${event.name}, Date: ${event.date}, Location: ${event.location}\n`;
    });
       
    }
    
    
    else {
       
       chatBotMessage = selfLearn(userMessage);
    }
  }

 if (chatBotMessage != ""){
  appendMessage(chatBotMessage);
 }
  
//  var userQuestion = userMessage
//   console.log(userQuestion);
//  if (chatBotMessage === "I don't know about that. Can you teach me?") {
   
//     var userAnswer =userMessage;
//     console.log(userAnswer);
//     //knowledgeBase.push({ question: userQuestion, answer: userAnswer });
//  }


}

//append messages to the 
export function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<p class="botText"><span>${message}</span>`;
  $("#chatbox").append(messageElement);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Image map

const imageMapping = {
  dance: "./img/dance.gif",
  eat: "./img/eating.gif",
  boring: "./img/boring.gif",
  chicken: "./img/chickenhead.gif",
  surprise: "./img/welcome.gif",
  joke: "./img/joking.gif",
  greedy: "./img/greedy.gif",
  embarassing: "./img/embarace.gif",
  embarass: "./img/embarace.gif",
  eat: "./img/eating.gif",
  birthday: "./img/birthday.gif",
  hello: "./img/greeting.gif",
  hi: "./img/greeting.gif",
  goodbye: "./img/greeting.gif",
  bye: "./img/greeting.gif",
  "see you later": "./img/greeting.gif",
  "see you": "./img/greeting.gif",
  later: "./img/greeting.gif",
};

function changeAction(userMessage) {
  const lowercaseMessage = userMessage.toLowerCase();
  const imagePath =
    imageMapping[
      Object.keys(imageMapping).find((key) => lowercaseMessage.includes(key))
    ] || "./img/mrbean.jpg";
  image.src = imagePath;
}

//send message user click 
function handleUserInputs() {
  var user= {message: ""};
  var userMessage = textbox.value;

  let userMessageText = userMessage.trim();
  user.message = userMessageText;
  textbox.value = "";
  sendMessage(userMessageText);
  chatBotRespond(userMessageText);
  changeAction(userMessageText);
};

sendBtn.addEventListener('click', handleUserInputs);

textbox.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        handleUserInputs();
      }
});