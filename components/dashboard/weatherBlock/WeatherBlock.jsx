"use client";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityWeather } from "@/store/weatherSlice";
import WeatherTemperature from "./WeatherTemperature";

const WeatherBlock = () => {
  const dispatch = useDispatch();

  const { temp, icon, desc, status } = useSelector((state) => state.weather);

  useMemo(() => {
    dispatch(getCityWeather("Lviv"));
  }, [dispatch]);

  return (
    <div className="w-fit rounded border flex items-center">
      <WeatherTemperature icon={icon} temp={temp} />
      <p className="mx-8">
        Today is <span className="font-bold">{desc}!</span>
      </p>
    </div>
  );
};

export default WeatherBlock;
