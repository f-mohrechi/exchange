import React from "react";
import TextField from "../textField/TextField";
import PrimaryButton from "../buttons/PrimaryButton";
import DropDownMenu from "../textField/DropDownMenu";

export default function Form() {
  return (
    <div className="bg-primary-300 border border-primary-300 rounded-xl p-5 flex flex-col justify-between h-full shadow-main">
      <div>
        <div className="mb-10">
          <p className="text-lg md:text-xl font-semibold">Buy</p>
        </div>
        <TextField />
      </div>

      <div className="mt-10">
        <PrimaryButton text={"Compare"} />
      </div>
    </div>
  );
}
