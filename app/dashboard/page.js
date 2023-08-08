import React from "react";

import DashboardGreetings from "@/components/dashboard/dashboardGreetings/DashboardGreetings";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Button from "@/components/shared/Button";

const DashboardPage = async () => {
  const session = await getServerSession(options)
  return (
    <div>
      <DashboardGreetings />
      <Button>Click</Button>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default DashboardPage;
