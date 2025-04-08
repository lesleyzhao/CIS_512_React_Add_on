export default function ChartDisplay({ chartType }) {
    const chartMap = {
      hourly: "hourly_chart.png",
      weekly: "weekly_chart.png",
      past: "past_chart.png",
    };
  
    return (
      <div className="w-full px-4">
        <h2 className="text-lg font-semibold text-center mb-2">
          {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Temperature Trend
        </h2>
        <img
          src={chartMap[chartType]}
          alt="Weather Chart"
          className="w-full object-contain rounded shadow"
        />
      </div>
    );
  }
  