import Logo from "@/components/shared/Logo";
import React from "react";

import DashboardNavigation from "@/components/dashboard/dashboardHeader/dashboardNavigation/DashboardNavigation";
import DashboardUserInfo from "@/components/dashboard/dashboardHeader/dashboardUser/DashboardUserInfo";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex items-center justify-center mb-[100px]">
        <Logo />
        <p className="ml-4">CalorieTracking</p>
      </div>
      <DashboardNavigation />
      <DashboardUserInfo />
    </div>
  );
};

export default DashboardHeader;
