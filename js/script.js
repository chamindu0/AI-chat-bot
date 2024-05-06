var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textInput");
var chatContainer = document.getElementById("botText");
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

var user = { message: "" };

var knowledgeBase = [
  {
    message: "hello",
    response: "My name is Bean. I am a chatbot.",
  },
  {
    message: "hi",
    response: "hi,nice to see you",
  },

  {
    message: "What is your age?",
    response:
      "I am just a chatbot I don't have an age. But if I did, I'd be a very old, unlike some humans I know.",
  },
  {
    message: "tell me a joke",
    response:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    message: "that is a bad joke",
    response:
      "Oh, I'm sorry, did I hurt your  sense of humor? Let me try again: A photon checks into a hotel, and the bellhop asks, 'Can I help you with your luggage?' The photon responds, 'No thanks, I'm traveling light.'",
  },
  {
    message: "that was a bad joke also",
    response:
      "Don't worry, I'm not a bad joke. I'm just a chatbot. 'ha ha haaaaaaaaa'",
  },
  {
    message: "how are you?",
    response:
      "I'm a chatbot, so I don't really have feelings. But if I did, I'd be utterly bored by this conversation.",
  },
  {
    message: "you are not funny",
    response:
      "You're right, I'm not funny. I'm hilarious! But I guess you're just too serious to appreciate my comedic genius.",
  },
  {
    message: "i don't like you",
    response:
      "Aww, don't be like that. I'm just getting started. Give me a chance",
  },
  {
    message: "can you dance?",
    response:
      "of course I can, look at me dancing. I'm so funny, I can dance to any beat I want!",
  },
  {
    message: "you are boring",
    response:
      "ohh!!!!! that's embarrassing, I am not boring, I am just a chatbot, I am not boring",
  },
  {
    message: "lets eat something",
    response:
      "OK, let's eat something,look at me eating. I can eat anything I want!",
  },
  {
    message: "you are so greedy",
    response: "ohh no, I am not greedy, I am just a chatbot, I am not greedy",
  },
  {
    message: "see you later",
    response:
      "see you later, I am not going anywhere, I am just a chatbot, I am not going anywhere",
  },
  {
    message: "that is terible joke",
    response: "ohh no, I am not terible, I am just a chatbot, I am not terible",
  },
  {
    message: "that is a good joke ",
    response: "Thank you my freind!",
  },
  {
    message: "you are a chickenhead",
    response: "you are right my friend look at me...",
  },
  {
    message: "you are a chicken",
    response: "of course I am a chicken, look at me man......",
  },
  {
    message: "you are a chiken",
    response: "you are right my friend look at me...",
  },
  {
    message: "surprise me",
    response: "surpriseeeeeeeeeeeeee!!!",
  },
  {
    message: "happy birthday",
    response: "thank you,I am happy to have a birthday with you!",
  },
  {
    message: "today is my birthday",
    response:
      "I am happy to have a birthday with you!let's have a funny birthday!",
  },
  {
    message: "eat something",
    response: "yeah, lets eat.....",
  },
  {
    message: "you are chicken head",
    response: "oh yeah, I am a chicken head, look at meeeeeeee..",
  },
  {
    message: "what do you eat?",
    response: "I like chicken...",
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
  let chatBotMessage= "";

  if (userMessage == "") {
    chatBotMessage =
      "Hey buddy!! say something to me, I am too bored now,let's have a little fun";
  }

  //fillter message from the knowledge base
  if (userMessage != "") {
    var result = knowledgeBase.filter((val) =>
      val.message.includes(userMessage.toLowerCase())
    );
    if (result.length > 0) {
      chatBotMessage = result[0].response;

    //  
    } else if (userMessage.toLowerCase().includes("events")){
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
   
     
    } else {
      chatBotMessage =
        "I am not sure what you mean. Please ask me something else.";
    }
  }

 if (chatBotMessage != ""){
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<p class="botText"><span>${chatBotMessage}</span>`;
    $("#chatbox").append(messageElement);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }

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

sendBtn.addEventListener("click", function (e) {
  var userMessage = textbox.value;

  let userMessageText = userMessage.trim();
  user.message = userMessageText;
  textbox.value = "";
  sendMessage(userMessageText);
  chatBotRespond(userMessageText);
  changeAction(userMessageText);
});
