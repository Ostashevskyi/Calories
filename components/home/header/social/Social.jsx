import React from "react";
import instagram from "@/public/images/icons/social/instagram.svg";
import facebook from "@/public/images/icons/social/facebook.svg";
import youtube from "@/public/images/icons/social/youtube.svg";
import Link from "next/link";
import Image from "next/image";

const Social = () => {
  const socialIcons = [
    { id: 1, path: instagram, alt: "instagram_logo" },
    { id: 2, path: facebook, alt: "facebook_logo" },
    { id: 3, path: youtube, alt: "youtube_logo" },
  ];

  return (
    <div className="flex items-center space-x-5">
      {socialIcons.map((icon) => {
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
