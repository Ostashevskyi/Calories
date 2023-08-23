"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

export const LoginForm = () => {
  const { push } = useRouter();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    push("/");
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="email"
        name="login"
        placeholder="Enter a valid email address"
        className="border"
        value={userInfo.email}
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, email: target.value })
        }
      />
      <input
        type="password"
        name="pass"
        placeholder="Password"
        className="border my-4"
        onChange={({ target }) =>
          setUserInfo({ ...userInfo, password: target.value })
        }
      />
      <input type="submit" value="Log In" className="border cursor-pointer" />
    </form>
  );
};
