"use client";
import { getProducts, setTotal, deleteProduct } from "@/store/productsSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RedCrossIcon from "@/public/images/icons/red-cross.svg";

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

  const calcTotal = (valu) => {
    return products
      .map((product) => product[valu])
      .reduce((prev, next) => prev + next);
  };

  const handleClick = (productID) => {
    dispatch(deleteProduct({ productID, date }));
  };

  useEffect(() => {
    if (products.length > 0) {
      const totalCarbs = calcTotal("carbs");
      const totalFats = calcTotal("fats");
      const totalProteins = calcTotal("proteins");
      const totalCalories = calcTotal("calories");
      dispatch(
        setTotal({
          totalCarbs,
          totalFats,
          totalProteins,
          totalCalories,
        })
      );
    } else {
      dispatch(
        setTotal({
          totalCarbs: 0,
          totalFats: 0,
          totalProteins: 0,
          totalCalories: 0,
        })
      );
    }
  }, [products]);

  return (
    <>
      <article className={`grid grid-cols-8 border gap-6 text-center p-4`}>
        <div>
          <p>Time</p>
        </div>
        <div>
          <p>Meal</p>
        </div>
        <div>
          <p>Serving Size</p>
        </div>
        <div>
          <p>Saturated Fat</p>
        </div>
        <div>
          <p>Carbs</p>
        </div>
        <div>
          <p>Protein</p>
        </div>
        <div>
          <p>Calories</p>
        </div>
      </article>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <article
              className={`grid grid-cols-8 gap-6 text-center p-4 border`}
              key={product.id}
            >
              <div>{}</div>
              <div>{product.product}</div>
              <div>{product.amount}g</div>
              <div>{product.fats}g</div>
              <div>{product.carbs}g</div>
              <div>{product.proteins}g</div>
              <div>{product.calories}cal</div>
              <div className="flex items-center justify-center">
                <button onClick={() => handleClick(product.id)}>
                  <Image src={RedCrossIcon} alt="delete"></Image>
                </button>
              </div>
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
