import React from "react";

export default function TextField({ onChange }) {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="price">Price</label>
      </div>
      <div className="bg-primary-200 border border-primary-200 rounded-xl p-3 flex justify-between w-full">
        <input
          name="price"
          type="text"
          className="outline-none bg-transparent w-full text-secondary-100"
          placeholder="100"
          onChange={onChange}
        />
        <p>USDT</p>
      </div>
    </div>
  );
}
