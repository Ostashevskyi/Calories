import React from "react";

import SearchInput from "@/components/shared/SearchInput";

const DashboardGreetings = () => {
  return (
    <section className="flex justify-between  items-center">
      <h3 className="text-indigo-800 text-2xl font-normal leading-7">
        Welcome back <span className="font-bold">Mathew!</span>
      </h3>
      <SearchInput />
    </section>
  );
};

export default DashboardGreetings;
