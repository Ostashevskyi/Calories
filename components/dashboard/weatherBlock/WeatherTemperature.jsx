import React from "react";

import Image from "next/image";

const WeatherTemperature = ({ icon, temp }) => {
  const src = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="flex items-center">
      {icon && (
        <Image
          loader={() => src}
          src={src}
          width={52}
          height={52}
          alt="weather-icon"
          className="m-5"
        />
      )}
      <p className="text-black text-normal font-bold leading-7 ">
        {temp}
        <sup>°</sup>С
      </p>
    </div>
  );
};

export default WeatherTemperature;
