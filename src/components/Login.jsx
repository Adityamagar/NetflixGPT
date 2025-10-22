import { React, useRef } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
import { useState } from "react";
import { formValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMssg, setErrorMssg] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleButton = () => {
    const message = formValidate(email.current.value, pass.current.value);
    setErrorMssg(message);

    if (message) return;

    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMssg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMssg(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        className="absolute bg-black/80 w-3/12 mx-auto my-45 right-0 left-0 p-12 text-white rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full border border-gray-400 rounded placeholder:p-2 font-bold"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full border border-gray-400 rounded placeholder:p-2 font-bold"
        />
        <input
          ref={pass}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full border border-gray-400 rounded placeholder:p-2 font-bold"
        />
        <p className="text-red-500 p-2 font-bold">{errorMssg}</p>
        <button
          className="p-2 my-4 w-full rounded bg-red-800 cursor-pointer font-bold"
          onClick={handleButton}
        >
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
