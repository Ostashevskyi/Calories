import React from "react";
import { getServerSession } from "next-auth";

import Link from "next/link";
import HeaderGreetings from "../navigation/HeaderGreetings";

const Authorization = async () => {
  const session = await getServerSession();

  return (
    <div>
      {session ? (
        <HeaderGreetings />
      ) : (
        <Link
          href="/api/auth/signin"
          className="hover:text-yellow-500 active:scale-95 text-white text-[20px] font-normal"
        >
          Log In
        </Link>
      )}
    </div>
  );
};

export default Authorization;
