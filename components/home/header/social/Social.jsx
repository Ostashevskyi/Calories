import React from "react";

import { socialIcons_s } from "./socialIcons";

import Link from "next/link";
import Image from "next/image";

const Social = () => {
  return (
    <div className="flex items-center space-x-5">
      {socialIcons_s.map((icon) => {
        return (
          <Link href="" key={icon.id}>
            <Image src={icon.path} alt={icon.alt} />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
