const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let exchanges = [
  { name: "Nobitex", img: "/icons/nobitex.svg", price: 66634.10001 },
  { name: "Wallex", img: "/icons/wallex.svg", price: 66634.10005 },
  { name: "Bitpin", img: "/icons/bitpin.svg", price: 66634.1004 },
  { name: "Binance", img: "/icons/binance.svg", price: 66634.1003 },
];

function updatePrices() {
  exchanges = exchanges.map((exchange) => {
    const priceChange = (Math.random() - 0.5) * 2;
    return { ...exchange, price: Math.max(0, exchange.price + priceChange) };
  });

  exchanges.sort((a, b) => a.price - b.price);
}

io.on("connection", (socket) => {
  console.log("connected to the websocket");

  setInterval(() => {
    updatePrices();
    socket.emit("exchanges", exchanges);
  }, 5000);
});

httpServer.listen(3213, () => {
  console.log("Server is listening on port 3213");
});
