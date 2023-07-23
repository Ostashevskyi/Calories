import React from "react";

import Image from "next/image";

import searchIcon from "@/public/images/icons/search.svg";

const SearchInput = () => {
  return (
    <div className="border rounded-lg flex max-w-[300px] h-[58px]">
      <Image src={searchIcon} alt="search_icon" className="my-4 mx-5  " />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className="outline-none text-zinc-500"
      />
    </div>
  );
};

export default SearchInput;
