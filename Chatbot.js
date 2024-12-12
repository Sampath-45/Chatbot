let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInputEl = document.getElementById("userInput");
let chatContainerEl = document.getElementById("chatContainer");
let sendMsgBtnEL = document.getElementById("sendMsgBtn");

sendMsgBtnEL.onclick = function() {
    let inputVal = userInputEl.value;

    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainer);

    let userMsg = document.createElement("span");
    userMsg.textContent = inputVal;
    userMsg.classList.add("msg-to-chatbot");
    msgContainer.appendChild(userMsg);

    userInputEl.value = "";
    replyFromBot();
}

function replyFromBot() {
    let chatBotMsgs = chatbotMsgList.length;
    let botReply = chatbotMsgList[Math.ceil(Math.random() * chatBotMsgs) - 1]

    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainer);

    let chatBotMsg = document.createElement("span");
    chatBotMsg.textContent = botReply;
    chatBotMsg.classList.add("msg-from-chatbot");
    msgContainer.appendChild(chatBotMsg);
}