import React from "react";

import DashboardGreetings from "@/components/dashboard/dashboardGreetings/DashboardGreetings";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Button from "@/components/shared/Button";
import { LoginButton, LogoutButton } from "@/components/shared/auth";

const DashboardPage = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <DashboardGreetings />
      <Button>Click</Button>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default DashboardPage;
