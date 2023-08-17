"use client";
import React, { useMemo, useState } from "react";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { getDate } from "@/store/dateSlice";

const DiaryTimePicker = () => {
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const onChange = (date) => {
    console.log("ONCHANGE:", date);
    setDate(date);
    dispatch(getDate({ date }));
  };

  useMemo(() => {
    console.log("FIRST LOAD DATE:", date);
    dispatch(getDate({ date }));
  }, []);

  return (
    <DatePicker
      value={date}
      onChange={(date) => onChange(date)}
      format="dd/MM/yyyy"
    />
  );
};

export default DiaryTimePicker;
