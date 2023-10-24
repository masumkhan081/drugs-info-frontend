import React from "react";

export default function Button({ onClick, txt, icon,style,type }) {
  return (
    <button onClick={onClick} className={style} type={type}>
      {icon}
      {txt}
    </button>
  );
}
