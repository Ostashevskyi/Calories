import React from "react";

import Button from "@/components/shared/Button";

const Title = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-24 space-y-8 pb-24">
      <h1 className="text-white text-6xl font-bold">CalorieTrack</h1>
      <h3 className="text-slate-500 text-3xl font-bold text-center">
        Your Personalized Fitness Fuel
      </h3>
      <Button>Get Started</Button>
    </div>
  );
};

export default Title;
