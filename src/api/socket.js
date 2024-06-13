// src/api/socket.js

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("A client connected");

  ws.send("Hello, client!");

  ws.on("close", function close() {
    console.log("Client disconnected");
  });

  wss.clients.forEach((client) => {
    client.send("Test message from server");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
