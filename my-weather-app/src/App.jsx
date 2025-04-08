import React, { useState } from "react";
import WeatherCircle from "./components/WeatherCircle";
import Tabs from "./components/Tabs";
import ChartDisplay from "./components/ChartDisplay";

export default function App() {
  const [chartType, setChartType] = useState("hourly");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-[430px] h-[932px] bg-[#c6f0fd] p-6 rounded-xl shadow-lg flex flex-col items-center">
        <WeatherCircle />
        <Tabs selected={chartType} onChange={setChartType} />
        <ChartDisplay chartType={chartType} />
      </div>
    </div>
  );
}
