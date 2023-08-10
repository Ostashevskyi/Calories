import React from "react";
import DiaryTable from "./DiaryTable";

const Diary = async () => {
  return (
    <div className="basis-[40%]">
      <article className="border flex justify-between px-6 py-4">
        <div className="text-center">
          <p>Time</p>
        </div>
        <div>
          <p>Meal</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Fats</p>
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
      <DiaryTable />
    </div>
  );
};

export default Diary;
