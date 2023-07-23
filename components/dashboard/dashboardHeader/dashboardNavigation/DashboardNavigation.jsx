import React from "react";
import navigationSection from "./DashNav";
import Image from "next/image";

const DashboardNavigation = () => {
  return (
    <div className="ml-10">
      <h4 className="text-indigo-800 text-xl font-normal mb-6">Menu</h4>
      {navigationSection.map((el) => {
        return (
          <div
            key={el.id}
            className="flex items-center my-[30px] text-zinc-500 text-m font-normal"
          >
            <Image src={el.icon} alt={el.title} />
            <h4 className="mx-4">{el.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardNavigation;
