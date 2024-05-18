import eventsList from "./eventList.js";
import knowledgeBase from "./knowledgeBase.js";
import selfLearn from "./learn.js";
import eventDetails from "./eventsDetails.js";


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
  {
    event: "Birthday party",
    date: "May 31, 2024",
    location: "Room 5",
    organize: "batch 1",
  },
  {
    event: "conference",
    date: "June 10, 2024",
    location: "Auditorium",
    organize: "batch 76",
  },
    {
    event: "debate",
    date: "June 22, 2024",
    location: "Room 9",
    organize: "batch 79",
  },
  {
    event: "career fair",
    date: "June 31, 2024",
    location: "Room 15",
    organize: "batch 80",
  },
    {
    event: "Anual Trip",
    date: "July 7;, 2024",
    location: "Gall",
    organize: "batch 66",
  },
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
  let chatBotMessage = "";

  if (userMessage == "") {
    chatBotMessage =
      "Hey buddy!! say something to me, I am too bored now,let's have a little fun";
  }

  //fillter message from the knowledge base
  if (userMessage != "") {
    var result;

    result = knowledgeBase.find((val) =>
      userMessage.toLowerCase().startsWith(val.message.toLowerCase())
    );


    if (result && typeof result.response === "function") {
      chatBotMessage = result.response(userMessage);
    } else if (result && typeof result.response === "string") {
      chatBotMessage = result.response;
    } else if (userMessage.toLowerCase().includes("events")) {
      eventsList();
    } else if (userMessage.toLowerCase().includes("schedule")) {
      events.forEach((event, index) => {
        chatBotMessage += `Event ${index + 1}: ${event.event}, Date: ${
          event.date
        }, Location: ${event.location}\n`;
      });
      } else if (userMessage.toLowerCase().includes("plan")) {

      let result = eventDetails.find((val) =>
      userMessage.toLowerCase().includes(val.message.toLowerCase())
    );
          chatBotMessage = result.response;
        
   
    } else {
      chatBotMessage = selfLearn(userMessage);
    }
  }

  if (chatBotMessage != "") {
    appendMessage(chatBotMessage);
  }
}

//append messages to the chat box
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
  var user = { message: "" };
  var userMessage = textbox.value;

  let userMessageText = userMessage.trim();
  user.message = userMessageText;
  textbox.value = "";
  sendMessage(userMessageText);
  chatBotRespond(userMessageText);
  changeAction(userMessageText);
}

sendBtn.addEventListener("click", handleUserInputs);

textbox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleUserInputs();
  }
});
