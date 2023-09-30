import React from "react";
import Label from "../sharedUI/Label";
import { postHandler } from "../axios/handler";
//  icons
import eye from "../assets/icons/eye.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../sharedUI/Input";
import Button from "../sharedUI/Button";
//
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    postHandler("/auth/login", { email, password })
      .then((data) => {
        console.log("result:  ", data, " :: ", data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function setTestData() {
    setEmail("email@gmail.com");
    setPassword("123456");
  }

  function passVisibility(e, id) {
    e.preventDefault();
    var x = document.getElementById(id);
    x.type === "password" ? (x.type = "text") : (x.type = "password");
    setTimeout(() => {
      x.type = "password";
    }, 2000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-grow flex flex-col rounded-md border-4 border-t-0 border-orange-900 gap-4 md:pt-10 pt-4 px-1.5 "
    >
      <div className="flex flex-col gap-2">
        <Label txt="Email" />
        <Input
          type="email"
          required={true}
          value={email}
          pc="Enter Your Email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Label txt="Password" />
            <button onClick={(e) => passVisibility(e, "password")}>
              <img src={eye} className="icn_sm" />
            </button>
          </div>
          <div>
            <Link to="/auth/account-recovery" className="text-blue-400">
              Forget Password ?
            </Link>
          </div>
        </div>
        <Input
          value={password}
          type="password"
          title="Must contain at least 6 or more characters"
          required={true}
          pc="Set a password"
          style=" flex-grow"
        />
      </div>
      <div className="flex justify-between">
        <Button
          onClick={setTestData}
          txt=" Test Data"
          style=" btn_test_data "
        ></Button>
        <button type="submit" className=" btn_auth_submit ">
          Log in
        </button>
      </div>
    </form>
  );
}
