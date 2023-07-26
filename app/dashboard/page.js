import React from "react";

import DashboardGreetings from "@/components/dashboard/dashboardGreetings/DashboardGreetings";
import WeatherBlock from "@/components/dashboard/weatherBlock/WeatherBlock";
import CaloriesBlocks from "@/components/dashboard/caloriesBlocks/caloriesBlocks";

const DashboardPage = () => {
  return (
    <div>
      <DashboardGreetings />
      <WeatherBlock />
      <CaloriesBlocks />
    </div>
  );
};

export default DashboardPage;
