import React from "react";
import Button from "../common-ui/Button";

export default function AuthToggler({ loginView, toggle }) {
 
  const activeStyle = (sign) =>
    loginView == sign
      ? "btn_auth_toggler border-x-8  mt-1  border-green-200 shadow-md shadow-black "
      : "btn_auth_toggler border-x-8  mb-1  border-orange-900";

  return (
    <div className="  rounded-md ">
      <Button
        txt="Log In"
        onClick={() => toggle(true)}
        style={` ${activeStyle(true)}`}
      />

      <Button
        txt="Sign Up"
        onClick={() => toggle(false)}
        style={`   ${activeStyle(false)}`}
      />
    </div>
  );
}
