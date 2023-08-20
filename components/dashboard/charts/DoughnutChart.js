"use client";

import React, { use, useEffect, useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const { totalCarbs, totalFats, totalProteins } = useSelector(
    (state) => state.products
  );

  const DoughnutChart = useMemo(() => {
    const data = {
      labels: ["Carbs", "Fats", "Proteins"],
      datasets: [
        {
          label: "Kcal",
          data: [totalCarbs, totalFats, totalProteins],
          backgroundColor: ["#6f58e9", "#2ddac1", "#2d99fe"],
          borderColor: ["#6f58e9", "#2ddac1", "#2d99fe"],
          borderWidth: 1,
        },
      ],
    };

    return <Doughnut data={data} />;
  }, [totalCarbs, totalFats, totalProteins]);

  return (
    <div className="w-[300px] h-[300px]">
      {totalCarbs || totalFats || totalProteins ? (
        DoughnutChart
      ) : (
        <h2>You have no data</h2>
      )}
    </div>
  );
};

export default DoughnutChart;
