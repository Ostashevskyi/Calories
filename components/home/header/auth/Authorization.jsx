import React from "react";

import Link from "next/link";

const Authorization = () => {
  return (
    <div>
      <Link
        href="/api/auth/signin"
        className="hover:text-yellow-500 active:scale-95 text-white text-[20px] font-normal"
      >
        Log In
      </Link>
    </div>
  );
};

export default Authorization;
