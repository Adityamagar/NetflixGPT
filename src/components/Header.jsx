import React from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex px-6 justify-between">
      <img className="w-40 p-3" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex m-4 gap-1">
          <img className="w-10 h-10" alt="usericon" src={USER_ICON} />
          <button
            className="text-white font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
