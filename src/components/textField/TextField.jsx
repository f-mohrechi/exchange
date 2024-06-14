import React from "react";

export default function TextField({ inputRef }) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="price">Price</label>
      </div>
      <div className="bg-primary-200 border border-primary-200 rounded-xl p-3 flex justify-between w-full">
        <input
          name="price"
          type="number"
          className="outline-none bg-transparent w-full text-secondary-100"
          placeholder="100"
          ref={inputRef}
        />
        <p>USDT</p>
      </div>
    </div>
  );
}
