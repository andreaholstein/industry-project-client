import "./Chatbot.scss";
import ScotiabankIcon from "../../assets/icons/scotiabank.svg";
import { useEffect, useState } from "react";

const Chatbot = () => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    fetch(ScotiabankIcon)
      .then((response) => response.text())
      .then((data) => setIcon(data))
      .catch((error) =>
        console.error("Unable to fetch SVG:", error))
  }, []);

  return (
    <button className="chatbot__cta" >
      <span
        className="chatbot__cta-icon"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <span className="chatbot__cta-text">Contact Us</span>
    </button>
  )
}

export default Chatbot;