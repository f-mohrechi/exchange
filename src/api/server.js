const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Create a list of exchanges
let exchanges = [
  { name: "Exchange 1", price: 100 },
  { name: "Exchange 2", price: 200 },
  // Add more exchanges as needed
];

// Emit exchange data every 5 seconds
setInterval(() => {
  exchanges.forEach((exchange) => {
    exchange.price += Math.floor(Math.random() * 10); // Simulate price change
  });
  exchanges.sort((a, b) => a.price - b.price); // Sort based on least price
  io.emit("updateExchanges", exchanges);
}, 5000);

// Socket.io connection
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
const PORT = 5000;
http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
