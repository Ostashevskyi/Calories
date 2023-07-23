import React from "react";

import Authorization from "./auth/Authorization";

import Navigation from "./navigation/Navigation";

import Logo from "../../shared/Logo";

import Social from "./social/Social";

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
