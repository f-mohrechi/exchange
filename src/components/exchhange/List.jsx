import React from "react";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

export default function List({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-primary-300 rounded-xl shadow-main">
        <ListHeader />
        <tbody>
          {data.map((item, index) => (
            <ListItem
              key={item.name}
              index={index}
              data={item}
              isLast={data.indexOf(item) === data.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
