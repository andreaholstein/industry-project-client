import "./Chatbot.scss";
import ScotiabankIcon from "../../assets/icons/scotiabank.svg";
import SendIcon from "../../assets/icons/message.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [icon, setIcon] = useState("");
  const [sendIcon, setSendIcon] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Fetch Scotiabank Icon
    fetch(ScotiabankIcon)
      .then((response) => response.text())
      .then((data) => setIcon(data))
      .catch((error) =>
        console.error("Unable to fetch ScotiaBank ICON:", error))

    // Fetch Send Icon
    fetch(SendIcon)
      .then((response) => response.text())
      .then((data) => setSendIcon(data))
      .catch((error) => console.error("Unable to fetch Send ICON:", error));
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post("http://localhost:8081/api/chat", {
        prompt: userInput,
      });

      setMessages([...newMessages, { sender: "bot", text: response.data.response }]);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      setMessages([...newMessages, { sender: "bot", text: "Error processing your message." }]);
    }
  };

  return (
    <div className="chatbot">
      {!isChatOpen && (
        <button className="chatbot-cta" onClick={toggleChat}>
          <span
            className="chatbot-cta__icon"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
          <span className="chatbot-cta__text">Contact Us</span>
        </button>
      )}

      {isChatOpen && (
        <div className="chatbot-window">
          <section className="chatbot-window__header">
            <span className="chatbot-window__title">Message Us</span>
            <button className="chatbot-window__close" onClick={toggleChat}>
              ✖
            </button>
          </section>
          <section className="chatbot-window__body">
            {messages.map((msg, index) => (
              <div key={index} className="chatbot-window__message-group">

                <div
                  className={`chatbot-window__label ${
                    msg.sender === "user" ? "chatbot-window__label--user" : "chatbot-window__label--bot"
                  }`}
                >
                  {msg.sender === "user" ? "USER" : "BOT"}
                </div>

                <div
                  className={`chatbot-window__message ${
                    msg.sender === "user" ? "chatbot-window__message--user" : "chatbot-window__message--bot"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </section>
          <section className="chatbot-window__footer">
            <input
              type="text"
              className="chatbot-window__input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="chatbot__send-btn"
              onClick={sendMessage}
              dangerouslySetInnerHTML={{ __html: sendIcon }}
            />
          </section>
        </div>
      )}
    </div>
  )
}

export default Chatbot;