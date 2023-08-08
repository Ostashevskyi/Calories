"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button className="border" onClick={() => signIn()}>
      Sign In
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button className="border mx-4" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
