"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ children }) => {
  return (
    <SessionProvider basePath="calories-chi.vercel.app/api/auth">
      {children}
    </SessionProvider>
  );
};

export default NextAuthProvider;
