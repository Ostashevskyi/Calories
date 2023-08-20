"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const { push } = useRouter();
  const sendData = async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const firstName = document.querySelector("#first-name").value;
    const secondName = document.querySelector("#second-name").value;

    if (!email || !password || !firstName || !secondName) {
      alert("You need to fill all fields");
    } else if (password.length < 5) {
      alert("Your password need to have length more than 5");
    } else {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          secondName,
          password,
          email,
        }),
      });

      push("/api/auth/signin");
    }
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-center">Sign Up</h1>
      <form
        method="POST"
        className="flex flex-col"
        onSubmit={(e) => sendData(e)}
      >
        <input
          type="email"
          name="login"
          placeholder="Enter a valid email address"
          className="border"
          id="email"
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          className="border my-4"
          id="password"
        />
        <input
          type="text"
          name="first-name"
          placeholder="Enter your first name"
          className="border"
          id="first-name"
        />
        <input
          type="text"
          name="second-name"
          placeholder="Enter your second name"
          className="border"
          id="second-name"
        />
        <input type="submit" value="Log In" className="border cursor-pointer" />
      </form>
      <p>
        <Link href="/account/login">Have an account?</Link>
      </p>
    </div>
  );
};

export default Register;
