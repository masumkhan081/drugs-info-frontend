import React from "react";
import google from "../assets/icons/google.svg";
import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin2.svg";
import Title from "../sharedUI/Title";
import dotenv from "dotenv";

export default function AuthOptions() {
  const BASE_URL = "http://localhost:3000";

  return (
    <>
      <Title txt="Or, Quick Sign In With" style="neutral_title"/>

      <div className="w-full flex flex-col flex-grow justify-center items-center gap-3">
        <a
          href={"https://reg-sys-passport.onrender.com/auth/google"}
          className="btn_auth_option "
        >
          <img src={google} className="icn_sm" />
          Google
        </a>
        <button className="btn_auth_option ">
          <img src={facebook} className="icn_sm" />
          Facebook
        </button>
        <button className="btn_auth_option ">
          <img src={linkedin} className="icn_sm" />
          Linkedin
        </button>
        <button className="btn_auth_option ">
          <img src={github} className="icn_sm " />
          Github
        </button>
      </div>
    </>
  );
}
