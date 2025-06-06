const faqData = {
  "how do i send a photo on whatsapp":
    "📸 Steps:\n1. Open WhatsApp\n2. Open a chat\n3. Tap 📎 > 'Gallery'\n4. Select a photo & tap Send ➤",
  "what is google pay":
    "💳 Google Pay is a UPI payment app by Google. You can send money, pay bills, and recharge.",
  "how to use google maps":
    "🗺️ Steps:\n1. Open Google Maps\n2. Search a location\n3. Tap 'Directions'\n4. Tap 'Start' to begin navigation 🚗",
  "how to scan qr code in paytm":
    "🔍 Steps:\n1. Open Paytm\n2. Tap 'Scan & Pay'\n3. Point your camera at QR code\n4. Enter amount & pay",
  "how to recharge using phonepe":
    "📱 Steps:\n1. Open PhonePe\n2. Go to ‘Recharge’\n3. Enter number & plan\n4. Tap Pay 💰"
};

const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `${sender}-message`;
  msgDiv.textContent = text;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generateReply(input) {
  const lowerInput = input.toLowerCase().trim();
  for (let key in faqData) {
    if (lowerInput.includes(key)) {
      return faqData[key];
    }
  }
  return "🤔 Sorry, I don’t have info on that yet. Try asking about WhatsApp, Paytm, or Google Maps!";
}

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const userMsg = chatInput.value.trim();
    addMessage(userMsg, 'user');
    chatInput.value = '';

    setTimeout(() => {
      const botReply = generateReply(userMsg);
      addMessage(botReply, 'bot');
    }, 600);
  }
});
