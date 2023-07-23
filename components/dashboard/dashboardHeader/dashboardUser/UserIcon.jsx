import Image from "next/image";
import React from "react";
import userImage from "@/public/images/userLogo.png";

const UserIcon = () => {
  return <Image src={userImage} alt="User image" width={48} height={48} />;
};

export default UserIcon;
