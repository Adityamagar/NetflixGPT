import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black z-10">
      <img className="w-45 p-4" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
