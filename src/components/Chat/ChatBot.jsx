import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Dynamically load the chatbot script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "LyHtW0MStCSXCPIGtulCi");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Set the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "LyHtW0MStCSXCPIGtulCi",
      domain: "www.chatbase.co",
    };

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }} className="hidden">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/LyHtW0MStCSXCPIGtulCi"
        width="100%"
        style={{ height: "100%", minHeight: "700px" }}
        frameBorder="0"
        title="Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
