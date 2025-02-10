<!DOCTYPE html>
<html>
<head>
    <title>Chatbot Interface</title>
</head>
<body>
    <div id="chat-window" style="width: 300px; height: 400px; border: 1px solid #000; overflow-y: scroll;"></div>
    <input type="text" id="user-input" placeholder="Type your message..." />
    <button onclick="sendMessage()">Send</button>

    <script>
        async function sendMessage() {
            const userInput = document.getElementById('user-input').value;
            const chatWindow = document.getElementById('chat-window');

            // Display user message
            chatWindow.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

            // Send message to Azure Bot Service
            const response = await fetch('YOUR_DIRECT_LINE_ENDPOINT', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userInput })
            });

            const botResponse = await response.json();

            // Display bot response
            chatWindow.innerHTML += `<p><strong>Bot:</strong> ${botResponse.text}</p>`;
        }
    </script>
</body>
</html>
