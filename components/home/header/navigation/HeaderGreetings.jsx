import React from "react";
import { getServerSession } from "next-auth";
import DropdownElement from "@/components/shared/Dropdown";

const HeaderGreetings = async () => {
  const session = await getServerSession();
  const { user } = session;
  return (
    <div className="flex align-center">
      <h2 className="text-white text-xl mx-4">Welcome {user.name}</h2>
      <DropdownElement />
    </div>
  );
};

export default HeaderGreetings;
