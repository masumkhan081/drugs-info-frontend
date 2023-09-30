import React, { useEffect, useState } from "react";
import AuthToggler from "./AuthToggler";
import Login from "./Login";
import Signup from "./Signup";
import { useLocation } from "react-router-dom";

export default function AuthForms() {
  //
  const location = useLocation();
  const status = location.state?.loginView;
  const [loginView, setLoginView] = useState(true);

  useEffect(() => { 
    setLoginView(status);
  }, [status]);
  //
  return (
    <>
      <AuthToggler loginView={loginView} toggle={setLoginView} />
      {loginView ? <Login /> : <Signup />}
      {/* <IfElse loginView={loginView} toggle={setLoginView} /> */}
    </>
  );
}
