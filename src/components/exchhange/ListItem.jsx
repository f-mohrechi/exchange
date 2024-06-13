import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export default function ListItem({ data }) {
  return (
    <div className="bg-primary-300 px-5 py-3 rounded-xl shadow-main">
      <div className="grid grid-cols-8 gap-x-10 items-center">
        <div>
          <p>{data.id}</p>
        </div>

        <div className="flex items-center gap-x-5 col-span-2">
          <Image src={data.img} alt={data.name} width={30} height={30} />
          <p>{data.name}</p>
        </div>

        <div className="col-span-2">{data.price}</div>
        <div className="col-span-2">{data.amount}</div>

        <div className="flex justify-end">
          <div className="w-max">
            <PrimaryButton text={"Buy"} />
          </div>
        </div>
      </div>
    </div>

    // <tr className="border-b h-20">
    //   <td className="pl-4">
    //     <p>{data.id}</p>
    //   </td>
    //   <td className="">
    //     <span className="flex items-center">
    //       <Image src={data.img} alt={data.name} width={30} height={30} />
    //       <span className="ml-3">{data.name}</span>
    //     </span>
    //   </td>
    //   <td>{data.price}</td>
    //   <td>{data.amount}</td>
    //   <td className="pr-4 flex justify-end items-center">
    //     <span className="w-max flex items-center">
    //       <PrimaryButton text={"Buy"} />
    //     </span>
    //   </td>
    // </tr>
  );
}
