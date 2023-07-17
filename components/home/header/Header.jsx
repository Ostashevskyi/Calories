import React from "react";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Social from "./social/Social";
import Authorization from "./auth/Authorization";

const Header = () => {
  return (
    <div className="flex items-center justify-around pt-10 ">
      <div className="flex items-center space-x-5">
        <Logo />
        <Navigation />
      </div>
      <Social />
      <Authorization />
    </div>
  );
};

export default Header;
