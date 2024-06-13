import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export default function ListItem({ data, isLast, index }) {
  return (
    <tr
      className={`text-xs sm:text-sm md:text-base border-b ${
        !isLast ? "border-b-secondary-300" : "border-b-transparent"
      }`}
    >
      <td className="px-4 py-2">{index + 1}</td>
      <td className="px-4 py-2">
        <span className="flex items-center gap-x-3">
          <Image src={data.img} alt={data.name} width={30} height={30} />
          {data.name}
        </span>
      </td>
      <td className="px-4 py-2">{data.price}</td>
      <td className="px-4 py-2">{data.amount}</td>
      <td className="px-4 py-2">
        <PrimaryButton text={"Buy"} Class={"text-xs md:text-base"} />
      </td>
    </tr>
  );
}
