import "./App.css";
import { AuditService } from "grcp";
import { useState } from "react";
import { ChatMessage } from "grcp/generated/AuditService_pb";

export const client = new AuditService.ChatAuditServiceClient(
  "http://localhost:9090"
);

export default function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (event: any) => {
    setMessage(event.target.value);
  };

  console.log(client);

  const sendMessage = () => {
    const msg = new ChatMessage();
    msg.setMessage(message);
    msg.setSender("Client");
    msg.setChat("chat");

    client.message(msg, () => {
      console.log("Hi");
    });
  };

  return (
    <>
      <textarea onChange={handleMessage} />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}
