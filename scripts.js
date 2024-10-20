// Array of uplifting quotes for bullying victims
const quotes = [
    '"No one can make you feel inferior without your consent." - Eleanor Roosevelt',
    '"We rise by lifting others." - Robert Ingersoll',
    '"You can’t control how other people treat you, but you can control how you respond to it." - Brian Tracy',
    '"Bullying is not a reflection of your worth, but of the bully’s insecurities." - Anonymous',
    '"The only thing worse than being bullied is not standing up for someone who is." - Anonymous',
    '"Courage is fire, and bullying is smoke." - Benjamin Disraeli',
    '"If you are neutral in situations of injustice, you have chosen the side of the oppressor." - Desmond Tutu',
    '"In a world where you can be anything, be kind." - Jennifer Dukes Lee',
    '"You have enemies? Good. That means you’ve stood up for something, sometime in your life." - Winston Churchill',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
    '"A bully is simply a coward who has found a way to project his or her fears on someone else." - Anonymous'
];


// Function to set a random quote on page load
function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Call the function on page load
window.onload = setRandomQuote;

// Chatbot responses and functionalities
const chatbotResponses = [
    "Hello! How can I help you today?",
    "I'm here to assist you with any concerns.",
    "Can you tell me more about the issue?",
    "Thank you for reaching out.",
    "We take bullying incidents seriously.",
    "Would you like to report an incident?",
    "I understand. How long has this been happening?",
    "Have you informed anyone else?",
    "Would you like some tips on how to handle this?",
    "You are not alone. We're here to help.",
    "Thank you for trusting us with this information.",
    "Would you like to chat with someone from our support team?",
    "We offer various resources to assist you.",
    "You can always report anonymously.",
    "We value your privacy and safety.",
    "Please know that we are here for you.",
    "Would you like to know more about SafePath?",
    "You can report incidents anytime through our platform.",
    "How can I make things easier for you?",
    "Let me know if you'd like to be redirected to a real person."
];

let messageCount = 0;

function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "flex" : "none";
}

function sendMessage() {
    const input = document.getElementById("chatbot-input");
    const userMessage = input.value.trim();
    if (userMessage) {
        addMessage("user", userMessage);
        respondToMessage();
        input.value = "";
    }
}

function addMessage(sender, text) {
    const chatbotBody = document.getElementById("chatbot-body");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = text;
    chatbotBody.appendChild(messageElement);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function respondToMessage() {
    if (messageCount < 20) {
        const response = chatbotResponses[messageCount % chatbotResponses.length];
        setTimeout(() => addMessage("bot", response), 500);
        messageCount++;
    } else {
        setTimeout(() => {
            addMessage("bot", "You will now be redirected to a real person for further assistance.");
            setTimeout(() => window.location.href = "https://forms.gle/5jgNyAiVsAACwSAAA", 2000); // Redirect to Google Form
        }, 1000);
    }
}


    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

