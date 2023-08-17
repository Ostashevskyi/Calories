import React from "react";
import DiaryTable from "./DiaryTable";
import DiaryTimePicker from "./DiaryTimePicker";
import DeleteButton from "@/components/shared/DeleteButton";

const Diary = async () => {
  return (
    <>
      <div className="basis-[50%]">
        <div>
          <DiaryTimePicker />
        </div>
        <div className="max-h-[350px] overflow-y-scroll">
          <article className={`grid grid-cols-7 border gap-6 text-center p-4`}>
            <div>
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
        <DeleteButton />
      </div>
    </>
  );
};

export default Diary;
