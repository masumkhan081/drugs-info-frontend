import React from "react";

export default function List({listArray}) {
  return (
    <>
      {listArray.map((listItem:string) => {
        return <li>{listItem}</li>;
      })}
    </>
  );
}
