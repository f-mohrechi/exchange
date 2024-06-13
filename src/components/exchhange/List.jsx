import React from "react";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

export default function List({ data }) {
  return (
    <div>
      <div className="mb-3">
        <ListHeader />
      </div>
      {data.map((item) => {
        return (
          <div key={item.id} className="mb-9">
            <ListItem data={item} />
          </div>
        );
      })}
    </div>
  );
}
