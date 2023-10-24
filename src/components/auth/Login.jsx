import React from "react";
import Label from "../../common-ui/Label";
import { postHandler } from "../../util/handler";
//  icons
import eye from "../../assets/icons/eye.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Input from "../../common-ui/Input";
import Button from "../../common-ui/Button";
//
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const status = location.state?.loginView;

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
    setUsername("email@gmail.com");
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
    <div className="h-full flex flex-col justify-center ">
      <form
        onSubmit={handleSubmit}
        className="md:w-[600px] w-full flex flex-col gap-6 pt-4 pb-8 px-2 sm:px-4 mx-auto rounded-md shadow-sm drop-shadow-md"
      >
        <div className="flex flex-col gap-1">
          <Label txt="User Name" />
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
            pc="Enter Your username"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Label txt="Password" />
              <button onClick={(e) => passVisibility(e, "password")}>
                <img src={eye} className="icn_sm" />
              </button>
            </div>

            <Link to="/auth/account-recovery" className="text-blue-400">
              Forgot Password ?
            </Link>
          </div>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            title="Must contain at least 6 or more characters"
            required={true}
            pc="password"
            style=" flex-grow"
          />
        </div>
        <div className="flex justify-between">
          <Button txt="Log In" type="submit" style=" btn_auth_submit "></Button>
          <Button
            onClick={setTestData}
            txt=" Test Data"
            style=" btn_test_data "
          ></Button>
        </div>
      </form>
    </div>
  );
}
