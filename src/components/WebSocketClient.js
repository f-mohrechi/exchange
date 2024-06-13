// components/WebSocketClient.js

import { useEffect } from "react";

const WebSocketClient = () => {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("Connected to the WebSocket server");
      ws.send("Test message from client");
    };

    ws.onmessage = (event) => {
      console.log("Received message from server:", event.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    return () => {
      ws.close();
    };
  }, []);

  return <div>WebSocket Client</div>;
};

export default WebSocketClient;
