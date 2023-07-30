import React from "react";

import Link from "next/link";

const Navigation = () => {
  const nav = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Dashboard", href: "/dashboard" },
    { id: 3, title: "Settings", href: "/settings" },
  ];

  return (
    <div className="space-x-10">
      {nav.map((el) => {
        return (
          <Link
            key={el.id}
            href={el.href}
            className="hover:text-yellow-500 active:scale-95 text-white text-[20px] font-normal"
          >
            {el.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
