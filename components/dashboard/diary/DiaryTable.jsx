"use client";
import { getProducts } from "@/store/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DiaryTable = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { calories, protein, fats, carbs, amount, meal } = useSelector(
    (state) => state.calories
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [calories, protein, fats, carbs, amount, meal]);

  return (
    <>
      {products.map((product) => {
        return (
          <article className="flex" key={product.id}>
            <div>{product.time}</div>
            <div>{product.product}</div>
            <div>{product.amount}</div>
            <div>{product.fats}</div>
            <div>{product.carbs}</div>
            <div>{product.proteins}</div>
            <div>{product.calories}</div>
          </article>
        );
      })}
      <button
        onClick={async () => {
          await fetch("/api/", {
            method: "DELETE",
          });
        }}
      >
        Delete ALL
      </button>
    </>
  );
};

export default DiaryTable;
