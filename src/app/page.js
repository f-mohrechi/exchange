"use client";
import List from "@/components/exchhange/List";
import Form from "@/components/form/Form";
import { useMemo, useEffect, useState, useRef } from "react";
import io from "socket.io-client";

export default function Home() {
  const [exchanges, setExchanges] = useState([]);
  const [showExchanges, setShowExchanges] = useState(false);
  const usdtRef = useRef();

  useEffect(() => {
    const socket = io("http://localhost:3213");
    socket.on("connect", () => {
      console.log("Connected to the WebSocket server");
    });

    socket.on("exchanges", (data) => {
      setExchanges(data);
      console.log("Received exchanges from server:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleClick = () => {
    const usdt = parseFloat(usdtRef.current?.value);
    const updatedExchanges = exchanges.map((exchange) => {
      const amount = (usdt / exchange.price).toFixed(6);
      return { ...exchange, amount };
    });
    setExchanges(updatedExchanges);
    setShowExchanges(true);
  };

  const updatedExchanges = useMemo(() => {
    const usdt = parseFloat(usdtRef.current?.value || 0);
    return exchanges.map((exchange) => {
      const amount = (usdt / exchange.price).toFixed(6);
      return { ...exchange, amount };
    });
  }, [exchanges]);

  return (
    <>
      <div className="px-5 sm:px-12 md:px-20 xl:px-32 2xl:px-40 py-5 md:py-12">
        <div className="lg:grid grid-cols-4 gap-x-10">
          <div className="mb-5 md:mb-16 lg:mb-0">
            <Form usdtRef={usdtRef} onClick={handleClick} />
          </div>

          <div className="col-span-3">
            {showExchanges && updatedExchanges.length > 0 ? (
              <List data={updatedExchanges} />
            ) : (
              <div className="bg-primary-300 border border-primary-300 rounded-xl p-5 flex items-center justify-center h-full shadow-main">
                <p className="text-lg font-semibold">
                  Enter your price and click Compare.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
