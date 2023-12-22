import React, { useState } from "react";
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}