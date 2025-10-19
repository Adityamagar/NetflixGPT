import React from "react";
import Header from "./Header";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img src={NETFLIX_BG_IMAGE} alt="logo" />
      </div>
      <form className="absolute bg-black/80 w-3/12 mx-auto my-45 right-0 left-0 p-12 text-white rounded">
        <h2 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full border border-gray-400 rounded placeholder:p-2 font-bold"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full border border-gray-400 rounded placeholder:p-2 font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full border border-gray-400 rounded placeholder:p-2 font-bold"
        />
        <button className="p-2 my-4 w-full rounded bg-red-800 cursor-pointer font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
