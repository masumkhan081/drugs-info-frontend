import React from "react";

export default function Button({ onClick, txt, icon,style }) {
  return (
    <button onClick={onClick} className={style}>
      {icon}
      {txt}
    </button>
  );
}
