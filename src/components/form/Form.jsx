import React from "react";
import TextField from "../textField/TextField";

export default function Form() {
  return (
    <div className="bg-primary-300 border border-primary-300 rounded-3xl p-5 flex flex-col">
      <div className="mb-5">
        <p className="text-2xl font-semibold">Buy</p>
      </div>
      <TextField />
    </div>
  );
}