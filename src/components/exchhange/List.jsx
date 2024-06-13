import React from "react";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

export default function List({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-primary-300 rounded-xl">
        <ListHeader />
        <tbody>
          {data.map((item, index) => (
            <ListItem
              key={data.id}
              data={item}
              isLast={index === data.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
