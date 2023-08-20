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
          <DiaryTable />
        </div>
        <DeleteButton />
      </div>
    </>
  );
};

export default Diary;
