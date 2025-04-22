
console.log("✅ widget.js loaded");
// import chatbot from "../src/chatbot.html";
function injectChatbotButton() {
  const style = document.createElement("style");
  style.textContent = `
    #chatbot-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 24px;
      cursor: pointer;
      z-index: 1000;
    }
    #chatbot-iframe {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 350px;
      height: 500px;
      border: none;
      display: none;
      z-index: 1000;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement("button");
  button.id = "chatbot-btn";
  button.textContent = "💬";
  button.onclick = () => {
    const iframe = document.getElementById("chatbot-iframe");
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  };

  const iframe = document.createElement("iframe");
  iframe.id = "chatbot-iframe";
  iframe.src = "/chatbot.html";


  document.body.appendChild(button);
  console.log("Creating iframe...");
document.body.appendChild(iframe);
console.log("Iframe added");
  document.body.appendChild(iframe);
  iframe.style.display = "block"; // Force it to show immediately for testing
  iframe.style.border = "2px solid red";

}

injectChatbotButton();















// (function () {
//     const BUTTON_ID = 'my-chatbot-button';
//     const IFRAME_ID = 'my-chatbot-frame';
  
//     // Avoid injecting twice
//     if (document.getElementById(BUTTON_ID)) return;
//     console.log("Widget JS loaded!");

//     // Create Button
//     const button = document.createElement('button');
//     button.id = BUTTON_ID;
//     button.innerText = 'Chat with us!';
//     button.style.cssText = `
//       position: fixed;
//       bottom: 20px;
//       right: 20px;
//       background-color: #007bff;
//       color: white;
//       border: none;
//       padding: 12px 20px;
//       border-radius: 25px;
//       cursor: pointer;
//       z-index: 9999;
//     `;
  
//     // Create iFrame
//     const iframe = document.createElement('iframe');
//     iframe.id = IFRAME_ID;
//     iframe.src = 'https://your-vercel-domain.vercel.app/chatbot.html'; // Replace after deploy
//     iframe.style.cssText = `
//       display: none;
//       position: fixed;
//       bottom: 80px;
//       right: 20px;
//       width: 350px;
//       height: 500px;
//       border: none;
//       border-radius: 10px;
//       z-index: 9999;
//       box-shadow: 0 0 10px rgba(0,0,0,0.3);
//     `;
  
//     button.onclick = () => {
//       iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
//     };
  
//     window.addEventListener('DOMContentLoaded', () => {
//       document.body.appendChild(button);
//       document.body.appendChild(iframe);
//     });
//   })();
  

