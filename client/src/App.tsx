import { AuditService } from "grcp";
import { useState } from "react";
import { ChatMessage, ChatStory } from "grcp/generated/AuditService_pb";

export const client = new AuditService.ChatAuditServiceClient(
  "http://localhost:9090"
);

export default function App() {
  const [message, setMessage] = useState("");
  const [stream, setStream] = useState("");
  const [response, setResponse] = useState<string[]>();
  const handleMessage = (event: any) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    const msg = new ChatMessage();
    msg.setMessage(message);
    msg.setSender("sender");
    msg.setChat("chat");

    const callback = (
      error: AuditService.ServiceError | null,
      responseMessage: ChatStory | null
    ) => {
      console.log("responseMessage", responseMessage);
      setResponse(responseMessage?.getStoryList());
    };

    client.message(msg, callback);
  };

  return (
    <>
      <textarea onChange={handleMessage} />
      <button onClick={sendMessage}>Send</button>
      {response && <span> show response: {response}</span>}
      <br />
      {stream && <span>stream</span>}
    </>
  );
}
