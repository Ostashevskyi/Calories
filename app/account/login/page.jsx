import { LoginForm } from "@/components/shared/auth";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-center">Please Log In</h1>
      <LoginForm />
      <p>
        <Link href="/account/register">Don&apos;t have an account?</Link>
      </p>
    </div>
  );
};

export default Login;
