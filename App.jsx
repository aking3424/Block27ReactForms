import React, { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}