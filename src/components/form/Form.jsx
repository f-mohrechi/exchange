import React from "react";
import TextField from "../textField/TextField";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Form({ usdtRef, onClick }) {
  return (
    <div className="bg-primary-300 border border-primary-300 rounded-xl p-5 flex flex-col justify-between h-full shadow-main">
      <div>
        <div className="mb-10">
          <p className="text-lg md:text-xl font-semibold">Buy</p>
        </div>
        <TextField inputRef={usdtRef} />
      </div>

      <div className="mt-10">
        <PrimaryButton text={"Compare"} onClick={onClick} />
      </div>
    </div>
  );
}
