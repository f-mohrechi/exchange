import React from "react";

export default function PrimaryButton({ text, Class, onClick }) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        type="submit"
        className={`w-full bg-rose-600 rounded-xl py-2.5 px-5 text-secondary-100 font-medium md:font-semibold ${Class}`}
      >
        <p>{text}</p>
      </button>
    </div>
  );
}
