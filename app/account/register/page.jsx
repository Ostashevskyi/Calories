import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-center">Sign Up</h1>
      <form method="POST" className="flex flex-col">
        <input
          type="text"
          name="login"
          placeholder="Enter a valid email address"
          className="border"
        />
        <input
          type="pass"
          name="pass"
          placeholder="Password"
          className="border my-4"
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
