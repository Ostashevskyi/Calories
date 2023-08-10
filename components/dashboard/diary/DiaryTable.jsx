"use client";
import React from "react";

const DiaryTable = () => {
  const handleClick = async () => {
    await fetch("/api/products/getProducts", {
      method: "GET",
    });
  };

  return (
    <button className="border py-2 px-2" onClick={handleClick}>
      Get data
    </button>
  );
};

export default DiaryTable;
