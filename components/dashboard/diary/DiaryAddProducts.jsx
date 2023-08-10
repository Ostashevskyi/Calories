"use client";

import { getCalories } from "@/store/caloriesSlice";
import { useSession } from "next-auth/react";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const DiaryAddProducts = () => {
  const dispatch = useDispatch();

  const { calories, protein, fats, carbs, amount, meal } = useSelector(
    (state) => state.calories
  );

  useMemo(async () => {
    if (calories > 0) {
      await fetch("/api/products/sendProduct", {
        method: "POST",
        body: JSON.stringify({
          meal,
          quantity: amount,
          protein,
          fats,
          carbs,
          calories,
        }),
      });
    }
  }, [calories, protein, fats, carbs]);

  const handleClick = async () => {
    const meal = document.querySelector("#meal").value;
    const quantity = document.querySelector("#meal-quantity").value;

    dispatch(getCalories({ meal, quantity }));
  };

  return (
    <article>
      <h3>Add your products to diary</h3>
      <input type="text" id="meal" placeholder="Enter your meal" />
      <input
        type="text"
        id="meal-quantity"
        placeholder="Enter quantity of meal"
        className="mx-2"
      />
      <button className="py-2 px-8 border" onClick={handleClick}>
        Send
      </button>
    </article>
  );
};

export default DiaryAddProducts;
