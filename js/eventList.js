export default function eventsList(){
    
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

    }