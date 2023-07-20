import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  weight: ["600"],
  subsets: ["latin"],
});

export const H2White = ({ children }) => {
  return (
    <div className={playfair_display.className}>
      <h2 className="text-white text-[48px] font-semibold flex items-center justify-center pt-16 pb-8">
        {children}
      </h2>
    </div>
  );
};

export const H2Yellow = ({ children }) => {
  return (
    <div className={playfair_display.className}>
      <h2 className="text-yellow-500 text-[48px] font-semibold flex items-center justify-center pt-16 pb-8">
        {children}
      </h2>
    </div>
  );
};
