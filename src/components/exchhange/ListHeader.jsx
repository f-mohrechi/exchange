import React from "react";

export default function ListHeader() {
  return (
    <thead>
      <tr className="text-xs sm:text-sm md:text-base border-b border-b-secondary-200">
        <th className="px-2 sm:px-4 py-2 text-start">#</th>
        <th className="px-2 sm:px-4 py-2 text-start">Name</th>
        <th className="px-2 sm:px-4 py-2 text-start">Price</th>
        <th className="px-2 sm:px-4 py-2 text-start">Amount</th>
        <th className="px-2 sm:px-4 py-2">
          <span className="sr-only">continue</span>
        </th>
      </tr>
    </thead>
  );
}
