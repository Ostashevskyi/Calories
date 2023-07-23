import React from "react";

import Image from "next/image";

import logo from "@/public/logo.svg";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" width={48} />
    </div>
  );
};

export default Logo;
