import React from "react";

export default function List({ list }) {
  return (
    <div>
      {list.map((itemobj) => {
        return <p>{itemobj.input}</p>;
      })}
    </div>
  );
}
