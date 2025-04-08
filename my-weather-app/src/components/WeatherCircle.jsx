export default function WeatherCircle() {
    return (
      <div className="w-[350px] h-[350px] bg-[#6DBEFF] rounded-full mt-[90px] flex flex-col items-center justify-center text-black font-bold text-center">
        <h2 className="text-xl mb-1">Philadelphia</h2>
        <h1 className="text-2xl mb-1">Sunny ☀️</h1>
        <h1 className="text-3xl mb-1">27°F</h1>
        <p className="text-base">Wind speed: 40</p>
      </div>
    );
  }
  