const tabLabels = ["hourly", "weekly", "past"];

export default function Tabs({ selected, onChange }) {
  return (
    <div className="flex gap-2 mt-8 mb-4">
      {tabLabels.map((label) => (
        <button
          key={label}
          className={`tab px-4 py-2 rounded-lg cursor-pointer ${
            selected === label
              ? "bg-black text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => onChange(label)}
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </button>
      ))}
    </div>
  );
}
