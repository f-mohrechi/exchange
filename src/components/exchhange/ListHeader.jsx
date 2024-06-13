import React from "react";

export default function ListHeader() {
  return (
    <div className="px-5 py-3">
      <div className="grid grid-cols-7 gap-x-10 items-center">
        <div>
          <span>#</span>
        </div>

        <div className="col-span-2">
          <p>Name</p>
        </div>

        <div className="col-span-2">
          <p>Price</p>
        </div>

        <div className="col-span-2">
          <p>Amount</p>
        </div>

        <div className="flex justify-end">
          <div className="w-max"></div>
        </div>
      </div>

      {/* <thead className="h-12 text-xs text-secondary-100 bg-primary-100 rounded-xl">
      <th className="rounded-l-xl pl-4">#</th>
      <th>Name</th>
      <th>Price</th>
      <th>amount received</th>
      <th className="rounded-r-xl pr-4 ">
        <span className="sr-only"></span>
      </th>
    </thead> */}
    </div>
  );
}
