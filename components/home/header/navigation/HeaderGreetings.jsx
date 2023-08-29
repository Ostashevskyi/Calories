"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

  const { data } = session;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {data && (
        <div className="relative block min-w-[200px]">
          <div className="flex items-center">
            <h2 className="text-white text-xl">Welcome {data.user.name}</h2>
            <button
              onClick={handleClick}
              className=" text-white cursor-pointer p-3 "
            >
              ▼
            </button>
          </div>
          <div
            className={
              isOpen ? "text-xs absolute w-full bg-gray-900" : "hidden"
            }
          >
            <button
              onClick={() => signOut()}
              href="#"
              className="w-full text-center text-green-600 no-underline block p-3 hover:text-gray-900 hover:bg-green-600 focus:bg-gray-900 focus:text-green-600"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthButton;
