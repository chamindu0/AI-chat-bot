import rememberName from "./remembername.js";
import tellJoke from "./random.js";
import {sayHi} from "./random.js";



export var knowledgeBase = [
  {
    message: "hello",
    response: "My name is Mr.chat.I am a event management chatbot.How can I help you?",
  },
  {
    message: "hi",
    response: sayHi,
  },

  {
    message: "What is your age?",
    response:
      "I am just a chatbot I don't have an age. But if I did, I'd be a very old, unlike some humans I know.",
  },
  {
    message: "tell me a joke",
    response: tellJoke,
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
      "of course I can, look at me dancing., I can dance to any beat I want!",
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
      "happy birthday, to you!!!!!!!"
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
  {
    message: "its my birthday",
    response: "happy birthday",
  },
    {
    message: "i am",
    response: rememberName,
  },
      {
    message: "my name is",
    response: rememberName,
  },
  {
    message: "i'm",
    response: rememberName,
  },    
  {
    message: "bye",
    response: rememberName,
  },
  {
    message: "goodbye",
    response: rememberName,
  },
  {
    message: "i leave",
    response: rememberName,
  }

];

export default knowledgeBase;


