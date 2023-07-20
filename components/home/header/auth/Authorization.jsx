import Link from "next/link";
import React from "react";

const Authorization = () => {
  return (
    <div>
      <Link
        href="/account/login"
        className="hover:text-yellow-500 active:scale-95 text-white text-[20px] font-normal"
      >
        Log In
      </Link>
    </div>
  );
};

export default Authorization;
