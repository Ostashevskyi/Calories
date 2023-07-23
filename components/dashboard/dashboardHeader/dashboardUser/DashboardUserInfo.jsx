import React from "react";
import UserIcon from "./UserIcon";

const DashboardUserInfo = () => {
  return (
    <div className="flex mx-6">
      <UserIcon />
      <div className="text-zinc-700 font-normal ml-2">
        <p className="text-base leading-normal">Mathew Perry</p>
        <p className="text-xs">mathewperry@xyz.com</p>
      </div>
    </div>
  );
};

export default DashboardUserInfo;
