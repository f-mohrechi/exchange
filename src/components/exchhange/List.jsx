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

    // <div>
    //   <table className="w-full text-sm text-secondary-200 font-medium text-right">
    //     <ListHeader />

    //     <tbody>
    //       {data.map((item) => {
    //         return <ListItem data={item} key={item.id} />;
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
}
