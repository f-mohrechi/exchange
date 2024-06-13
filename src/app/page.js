"use client";
import List from "@/components/exchhange/List";
import Form from "@/components/form/Form";
import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Home() {
  const [exchanges, setExchanges] = useState([]);

  const socket = io();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the WebSocket server");
    });

    socket.on("message", (data) => {
      console.log("Received message from server:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <div className="px-5 sm:px-12 md:px-20 xl:px-32 2xl:px-40 py-5 md:py-12">
        <div>
          <h1>Exchanges</h1>
          <ul>
            {exchanges.map((exchange) => (
              <li key={exchange.name}>
                {exchange.name}: ${exchange.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:grid grid-cols-4 gap-x-10">
          <div className="mb-5 md:mb-16 lg:mb-0">
            <Form />
          </div>

          <div className="col-span-3">
            <List data={exchanges} />
          </div>
        </div>
      </div>
    </>
  );
}
