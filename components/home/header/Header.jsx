import React from "react";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Social from "./social/Social";

const Header = () => {
  return (
    <div className="flex items-center justify-around pt-10">
      <div className="flex items-center space-x-5">
        <Logo />
        <Navigation />
      </div>
      <Social />
    </div>
  );
};

export default Header;
