"use client";
import React from "react";
import Link from "next/link";

import HeaderGreetings from "../navigation/HeaderGreetings";
import Button from "@/components/shared/Button";
import { useSession } from "next-auth/react";

const Authorization = () => {
  const session = useSession();
  const status = session.status;

  return (
    <div>
      {status === "authenticated" ? (
        <HeaderGreetings />
      ) : (
        <Link href="/account/login">
          <Button>Log In</Button>
        </Link>
      )}
    </div>
  );
};

export default Authorization;
