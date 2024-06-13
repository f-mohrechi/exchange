"use client";
import CoinBox from "@/components/coinBox/CoinBox";
import List from "@/components/exchhange/List";
import Form from "@/components/form/Form";
import { useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState([
    {
      name: "Bitcoin",
      id: 1,
      img: "/icons/bitcoin.svg",
    },
    {
      name: "Bitcoin",
      id: 2,
      img: "/icons/bitcoin.svg",
    },
    {
      name: "Bitcoin",
      id: 3,
      img: "/icons/bitcoin.svg",
    },
    {
      name: "Bitcoin",
      id: 4,
      img: "/icons/bitcoin.svg",
    },
  ]);
  const [exchanges, setExchanges] = useState([
    {
      name: "Coinbase",
      img: "/icons/bitcoin.svg",
      id: 1,
      price: 12683333347922,
      amount: 0.00992783,
    },
    {
      name: "Coinbase",
      img: "/icons/bitcoin.svg",
      id: 1,
      price: 12683333347922,
      amount: 0.00992783,
    },
    {
      name: "Coinbase",
      img: "/icons/bitcoin.svg",
      id: 1,
      price: 12683333347922,
      amount: 0.00992783,
    },
    {
      name: "Coinbase",
      img: "/icons/bitcoin.svg",
      id: 1,
      price: 12683333347922,
      amount: 0.00992783,
    },
    {
      name: "Coinbase",
      img: "/icons/bitcoin.svg",
      id: 1,
      price: 12683333347922,
      amount: 0.00992783,
    },
  ]);

  return (
    <>
      <div className="px-5 sm:px-12 md:px-20 xl:px-32 2xl:px-40 py-5 md:py-12">
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
