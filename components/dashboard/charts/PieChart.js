"use client";
import React, { useMemo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "@/providers/AnimatedProgressProvider";

const PieChart = () => {
  const { totalCalories } = useSelector((state) => state.products);

  const goal = 5000;

  const percentage = (totalCalories * 100) / goal;

  const pieChart = useMemo(() => {
    return (
      <>
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={percentage}
          duration={1}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={roundedValue <= 100 ? `${roundedValue}%` : "100%"}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <div className="ml-4">
          <p>Daily goal is: {goal} cal</p>
          <p>Your value: {totalCalories} cal</p>
        </div>
      </>
    );
  }, [totalCalories, percentage]);

  return (
    <div className="w-[300px] h-[300px] flex items-center">
      {totalCalories ? pieChart : <h2>You have no data</h2>}
    </div>
  );
};

export default PieChart;
