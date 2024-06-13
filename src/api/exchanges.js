// pages/api/exchanges.js

let exchanges = [
  { name: "Exchange 1", price: 100 },
  { name: "Exchange 2", price: 150 },
  { name: "Exchange 3", price: 120 },
];

const updatePrices = () => {
  exchanges.forEach((exchange) => {
    exchange.price = Math.floor(Math.random() * 100) + 100; // Update prices randomly
  });

  exchanges.sort((a, b) => a.price - b.price); // Sort exchanges based on price
};

const handler = (req, res) => {
  if (req.method === "GET") {
    updatePrices();
    res.status(200).json(exchanges);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
