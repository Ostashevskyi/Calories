"use client";
import { getProducts } from "@/store/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DiaryTable = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { date } = useSelector((state) => state.date);

  const { calories, protein, fats, carbs, amount, meal } = useSelector(
    (state) => state.calories
  );

  useEffect(() => {
    dispatch(getProducts({ date }));
  }, [calories, protein, fats, carbs, amount, meal, date]);

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <article
              className={`grid grid-cols-7 gap-6 text-center p-4 border`}
              key={product.id}
            >
              <div>{}</div>
              <div>{product.product}</div>
              <div>{product.amount}</div>
              <div>{product.fats}</div>
              <div>{product.carbs}</div>
              <div>{product.proteins}</div>
              <div>{product.calories}</div>
            </article>
          );
        })
      ) : (
        <div className="text-center border p-4">You have no data</div>
      )}
    </>
  );
};

export default DiaryTable;
