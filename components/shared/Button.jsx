"use client";

import Link from "next/link";
import React from "react";

const Button = ({ children }) => {

  return (
    <Link href='/account/register'>
    <button
      className="w-28 h-16 rounded border-yellow-500 bg-yellow-400 text-white text-mx font-bold hover:bg-yellow-500 active:scale-95"
    >
      {children}
    </button>
    
    </Link>
  );
};

export default Button;
