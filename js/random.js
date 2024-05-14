export default function tellJoke() {
  var jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  ];
  var randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

export function sayHi() {
  var hi = [
    "Hi, It's been a pleasure to meet you",
    "Hi, Nice to meet you",
    "Hi, how are you?",
    "Hi, how are you doing?",
    "Hello, how are you?"
  ];
  var randomIndex = Math.floor(Math.random() * hi.length);
  return hi[randomIndex];
}
