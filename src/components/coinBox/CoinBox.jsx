import React from "react";
import Image from "next/image";

export default function CoinBox({ data }) {
  return (
    <div className="bg-primary-300 border border-primary-300 rounded-3xl p-3 flex justify-center items-center w-40 shadow-main">
      <p className="mr-5 text-lg font-semibold">{data.name}</p>
      <Image src={data.img} alt={data.name} width={30} height={30} />
    </div>
  );
}
