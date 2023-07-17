import Link from "next/link";
import React from "react";

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
          <Link key={el.id} href={el.href}>
            {el.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
