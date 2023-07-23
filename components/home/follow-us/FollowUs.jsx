import React from "react";

import Link from "next/link";
import Image from "next/image";

import { socialIcons_l } from "../header/social/socialIcons";

import { H2White } from "@/components/shared/H2";

const FollowUs = () => {
  return (
    <section className="bg-[url('/images/follow-us-bg.jpg')] bg-cover bg-no-repeat">
      <H2White>Follow Us</H2White>
      <div className="flex items-center justify-center pb-16 pt-14">
        {socialIcons_l.map((icon) => {
          return (
            <Link href="#" key={icon.id} className="mx-10">
              <Image src={icon.path} alt={icon.alt} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default FollowUs;
