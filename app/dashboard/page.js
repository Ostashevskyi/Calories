import React from "react";

import DashboardGreetings from "@/components/dashboard/dashboardGreetings/DashboardGreetings";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Button from "@/components/shared/Button";
import { LoginButton, LogoutButton } from "@/components/shared/auth";
import Diary from "@/components/dashboard/diary/Diary";
import DiaryAddProducts from "@/components/dashboard/diary/DiaryAddProducts";

const DashboardPage = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <DashboardGreetings />
      <p>{JSON.stringify(session)}</p>
      <div className="flex justify-between">
        <Diary />
        <DiaryAddProducts />
      </div>
    </div>
  );
};

export default DashboardPage;
