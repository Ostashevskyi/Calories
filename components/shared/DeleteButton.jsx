"use client";
import React from "react";

const DeleteButton = () => {
  return (
    <button
      onClick={async () => {
        await fetch("/api/", {
          method: "DELETE",
        });
      }}
    >
      Delete ALL
    </button>
  );
};

export default DeleteButton;
